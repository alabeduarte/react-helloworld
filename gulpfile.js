var gulp = require('gulp');
var react = require('gulp-react');
var bower = require('gulp-bower');

gulp.task('default', function(){
  return gulp.src('public/jsx/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('public/dist/js/'))
    .pipe(bower());
});
