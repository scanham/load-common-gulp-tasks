var jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish');

module.exports = function (gulp) {

  gulp.task('lint', function () {
    gulp.src(['lib/**/*.js', 'test/**/*.js'])
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
      //.pipe(jshint.reporter('fail')); // fails on first encountered error instead of running full report.
  });
};