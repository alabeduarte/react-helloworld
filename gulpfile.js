var gulp = require('gulp');
var react = require('gulp-react');
var bower = require('gulp-bower');
var browserify = require('gulp-browserify');

gulp.task('bundlerize', function() {
  gulp.src('public/dist/js/commentBox.js')
    .pipe(browserify())
    .pipe(gulp.dest('public/dist/js/bundle'))
});

gulp.task('convertJsxToJs', function(){
  return gulp.src('public/jsx/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('public/dist/js/'))
    .pipe(bower());
});

gulp.task('default', ['convertJsxToJs', 'bundlerize']);
