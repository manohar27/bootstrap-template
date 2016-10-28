require('babel-core/register');
var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');
var jasmine = require('gulp-jasmine');
var JasmineConsoleReporter = require('jasmine-console-reporter');

gulp.task('less', function () {
  return gulp.src('./src/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('tests', function () {
    return gulp.src('./src/**/*spec.js')
        .pipe(jasmine({
      reporter: [new JasmineConsoleReporter({
          colors: 1,           // (0|false)|(1|true)|2
          cleanStack: 1,       // (0|false)|(1|true)|2|3
          verbosity: 4,        // (0|false)|1|2|(3|true)|4
          listStyle: 'indent', // "flat"|"indent"
          activity: false
      })]
    }));
});

gulp.task('watch', function() {
	gulp.watch('./src/**/*.less', ['less']);
});
gulp.task('default', ['less', 'watch', 'tests']);
