var gulp = require('gulp'),
  connect = require('gulp-connect'),
  port = process.env.port || 8000;

var webserver = require('gulp-webserver');
// var ignore = require('gulp-ignore');

var concat = require('gulp-concat');
var filter = require('gulp-filter');
var del = require('del');
var gulpSequence = require('gulp-sequence');
var vinylPaths = require('vinyl-paths');
var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');
var path = require('path');
// var htmlmin = require('gulp-html-minifier');
// const imagemin = require('gulp-imagemin');
var ngAnnotate = require('gulp-ng-annotate');

// gulp.task('browserify', function() {
//     return gulp.src('app/src/js/main.js')
//         .pipe(browserify())
//         .pipe(gulp.dest('./app/dist/js'));
// });

var mainBowerFiles = require('gulp-main-bower-files');
var uglify = require('gulp-uglify');

var bowerBuildJS = function() {
  return gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(filter('**/*.js'))
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
};

var bowerBuildCSS = function() {
  return gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(filter('**/*.css'))
    .pipe(concat('vendor.css'))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./dist/css'));
};

var JSBuild = function() {
  return gulp.src('./app/js/*.js')
    .pipe(concat('production.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
};

var LESSBuild = function() {
  return gulp.src('./app/less/*.less')
    .pipe(concat('production.css'))
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./dist/css'));
};

var HTMLTemplateBuild = function() {
  return gulp.src('app/**/*.html')
    // .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
};

var ImageMin = function() {
  return gulp.src('app/images/**/*')
    // .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
};

var BuildFont = function() {
  return gulp.src('app/font/**/*')
    .pipe(gulp.dest('dist/fonts'));
};


gulp.task('delete', function() {
  return gulp.src('./dist')
    .pipe(vinylPaths(del));
});


gulp.task('build:bowerjs', function() {
  return bowerBuildJS();
});
gulp.task('build:bowercss', function() {
  return bowerBuildCSS();
});

gulp.task('build:js', function() {
  return JSBuild();
});

gulp.task('build:less', function() {
  return LESSBuild();
});

gulp.task('build:templates', function() {
  return HTMLTemplateBuild();
});

gulp.task('build:image', function() {
  return ImageMin();
});

gulp.task('build:fonts', function() {
  return BuildFont();
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

gulp.task('run:dist', function() {
  gulp.src('./dist/')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

//live reload js
gulp.task('js', function() {
  gulp.src('./js/app.js')
    .pipe(connect.reload());
});


//live reload html
gulp.task('html', function() {
  gulp.src('./index.html')
    .pipe(connect.reload());
});


//live reload html
gulp.task('watch', function() {
  gulp.watch('./js/app.js', ['js']);
  gulp.watch('./index.html', ['html']);
});



gulp.task('serve', ['watch', 'webserver']);
gulp.task('run', ['run:dist']);
gulp.task('build', gulpSequence('delete', 'build:bowerjs', 'build:js',
  'build:bowercss', 'build:less', 'build:templates', 'build:image', 'build:fonts'));
