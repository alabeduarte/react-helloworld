var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('default', function(){
  return gulp.src('jsx/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('dist/js/'));
});