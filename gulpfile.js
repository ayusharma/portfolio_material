
var gulp = require('gulp'),
	connect  = require('gulp-connect'),
	// browserify = require('gulp-browserify'),
	// concat = require('gulp-concat'),
	// babel = require('gulp-babel')
	port = process.env.port || 8000;

var webserver = require('gulp-webserver');
var ignore = require('gulp-ignore');

var concat = require('gulp-concat');
var filter = require('gulp-filter');
var del = require('del');
var gulpSequence = require('gulp-sequence');
var vinylPaths = require('vinyl-paths');


//
// gulp.task('browserify', function() {
//     return gulp.src('app/src/js/main.js')
//         .pipe(browserify())
//         .pipe(gulp.dest('./app/dist/js'));
// });

var mainBowerFiles = require('gulp-main-bower-files');
var uglify = require('gulp-uglify');

var bowerBuild = function(){
	return gulp.src('./bower.json')
			.pipe(mainBowerFiles())
			.pipe(filter('**/*.js'))
			.pipe(concat('vendor.js'))
			.pipe(uglify())
			.pipe(gulp.dest('./dist/js'))
}


gulp.task('delete', function(){
    return gulp.src('./dist')
    .pipe(vinylPaths(del));
});


gulp.task('uglify', function(){
    return bowerBuild();
});



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
gulp.task('build',gulpSequence('delete','uglify'))
