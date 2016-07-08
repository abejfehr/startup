var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');

gulp.task('lint', function() {
  return gulp.src(['src/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter());
});

gulp.task('concat', function() {
  return gulp.src(['src/*.js'])
    .pipe(concat('game.js'))
    .pipe(gulp.dest('./dist/'));
})

gulp.task('watch', function() {
  gulp.watch('src/*.js', ['lint', 'concat']);
});

gulp.task('default', ['watch']);
