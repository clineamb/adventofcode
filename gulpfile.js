const gulp = require('gulp');
const jasmine = require('gulp-jasmine');

gulp.task('tests', () => {
  gulp.src('./**/*.test.js')
    .pipe(jasmine());
});