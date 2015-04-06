var gulp = require('gulp');
var react = require('gulp-react');
var bower = require('gulp-bower');

gulp.task('default', function(){
  return gulp.src('jsx/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('dist/js/'))
    .pipe(bower());
});
