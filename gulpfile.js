var concat = require('gulp-concat');
var copy   = require('gulp-contrib-copy');
var gulp   = require('gulp');
var jshint = require('gulp-jshint');


gulp.task('lint', function () {
    return gulp.src(['src/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter());
});

gulp.task('concat', function () {
    return gulp.src(['src/worker.js', 'src/main.js'])
    .pipe(concat('game.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('copy', function () {
    return gulp.src('src/**/*.css')
    .pipe(copy())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    gulp.watch(['src/**/*.js', 'src/**/*.css'], ['lint', 'concat', 'copy']);
});

gulp.task('default', ['lint', 'concat', 'copy', 'watch']);
