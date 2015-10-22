'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var stripComments = require('gulp-strip-comments');

var config = require('./build.config');

gulp.task('sass', function () {
  return gulp.src(config.css.src)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(stripComments())
    .pipe(gulp.dest(config.dir.build))
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dir.build))
  ;
});

gulp.task('jshint', function() {
  return gulp.src(config.js.src)
    .pipe(jshint(config.jshint))
    .pipe(jshint.reporter('jshint-stylish'))
  ;
});

gulp.task('javascript', [ 'jshint' ], function() {
  return gulp.src(config.js.main)
    .pipe(browserify())
    .pipe(rename('mdl-compat.js'))
    .pipe(gulp.dest(config.dir.build))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dir.build))
  ;
});

gulp.task('default', ['sass', 'javascript']);

gulp.task('watch', ['default'], function() {
  gulp.watch(config.css.src, ['sass']);
  gulp.watch(config.js.src, ['javascript']);
});

