'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var config = require('./build.config');

gulp.task('sass', function () {
  gulp.src(config.css.src)
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(config.dir.build));
});

gulp.task('default', function() {
  gulp.watch(config.css.src, ['sass']);
});

