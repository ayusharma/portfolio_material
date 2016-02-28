
var gulp = require('gulp'),
	connect  = require('gulp-connect'),
	// browserify = require('gulp-browserify'),
	// concat = require('gulp-concat'),
	// babel = require('gulp-babel')
	port = process.env.port || 8000;

var webserver = require('gulp-webserver');


//
// gulp.task('browserify', function() {
//     return gulp.src('app/src/js/main.js')
//         .pipe(browserify())
//         .pipe(gulp.dest('./app/dist/js'));
// });



gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});


//live reload js
gulp.task('js',function(){
	gulp.src('./js/app.js')
	.pipe(connect.reload());
});


//live reload html
gulp.task('html',function(){
	gulp.src('./index.html')
	.pipe(connect.reload());
});


//live reload html
gulp.task('watch',function(){
	gulp.watch('./js/app.js',['js']);
	gulp.watch('./index.html',['html'])
});



gulp.task('serve',['watch','webserver'])
