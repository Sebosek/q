'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    json = require('./package.json');

const SRC = './scss/**/*.scss',
      DEST = './build';

gulp.task('sass', function () {
    return gulp.src([SRC])
        .pipe(sass().on('error', sass.logError))  
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DEST));
});

gulp.task('sass:build', function () {
    return gulp.src(SRC)
        .pipe(sass().on('error', sass.logError))  
        .pipe(minify())
        .pipe(rename(`q__${json.version}.min.css`))
        .pipe(gulp.dest(DEST));
});

gulp.task('sass:watch', function () {
    gulp.watch(SRC, ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);