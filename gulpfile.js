const gulp = require('gulp');
const jasmine = require('gulp-jasmine');

gulp.task('tests', () => {
  gulp.src(['./day*/*.test.js'])
    .pipe(jasmine());
});