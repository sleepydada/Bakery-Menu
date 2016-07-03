var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('public/sass/**/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('public/sass/**/style.scss',['styles']);
});