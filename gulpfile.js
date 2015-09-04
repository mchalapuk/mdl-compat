'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var bower = require('gulp-bower');

var config = require('./build.config');

gulp.task('sass', function () {
  return gulp.src(config.css.src)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(config.dir.build))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dir.build))
  ;
});

gulp.task('javascript', function() {
  return gulp.src(config.js.src)
    .pipe(jshint(config.jshint))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dir.build))
  ;
});

gulp.task('watch', function() {
  gulp.watch(config.css.src, ['sass']);
  gulp.watch([ config.js.src, '.jshintrc', 'build.config.js' ], ['javascript']);
});

gulp.task('build', ['sass', 'javascript']);
gulp.task('default', ['build', 'watch']);

