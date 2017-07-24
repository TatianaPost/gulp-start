var gulp = require("gulp"); 
var runSequence = require('run-sequence');
var browserSync = require("browser-sync").create();

// Styles
// var less = require('gulp-less');
var sass = require('gulp-sass');
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require('gulp-sourcemaps');

// Pug / Jade
var pug = require('gulp-pug');

// npm i gulp-less gulp-autoprefixer gulp-sourcemaps --save-dev
// npm i gulp-pug --save-dev
// npm i gulp-sass --save-dev


/* ------------------------------------
  SERVER
------------------------------------ */
gulp.task("server", function () {
	browserSync.init({
		// notify: false,
		// port: 1000,
		server: { baseDir: './app/' }
	});
});

/* ------------------------------------
  SASS
------------------------------------ */


gulp.task('sass', function () {
    return gulp.src('.app/sass/**/*.scss')
//     .pipe(sourcemaps.init())
     .pipe(sass())
//     .pipe(autoprefixer({ browsers: ['last 4 versions'] }))
//     .pipe(sourcemaps.write())
     .pipe(gulp.dest('./app/css/'))
});
 


/* ------------------------------------
  LESS
------------------------------------ */
// gulp.task('less', function() {
//    return gulp.src('./app/less/main.less')
//      .pipe(sourcemaps.init())
//      .pipe(less())
//      .pipe(autoprefixer({ browsers: ['last 4 versions'] }))
//      .pipe(sourcemaps.write())
//      .pipe(gulp.dest('./app/css/'))
//      .pipe(browserSync.stream());
// });


/* ------------------------------------
  PUG / JADE
------------------------------------ */
gulp.task('pug', function() {
    return gulp.src('./app/pug/*.pug')
      .pipe(pug({
    	// Your options in here. 
      }))
      .pipe(gulp.dest('./app/'))
      .pipe(browserSync.stream());
});







/* ------------------------------------
  WATCH
------------------------------------ */
gulp.task('watch', function() {
    gulp.watch('./app/scss/**/*.scss', ['sass']);
    gulp.watch('./app/pug/**/*.pug', ['pug']);
});	


/* ------------------------------------
  GULP - DEFAULT TASK 
------------------------------------ */
gulp.task('default', function() {
    runSequence(
    	['sass', 'pug'],
    	['server', 'watch']
    )
});



