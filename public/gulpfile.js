var bowerFiles = require('main-bower-files'),
    inject = require('gulp-inject'),
    gulp = require('gulp'),
    es = require('event-stream'),
    compass = require('gulp-compass'),
    webpack = require('gulp-webpack');

    var cssFiles = gulp.src('./stylesheets/**/*.scss')
        .pipe(compass({
                config_file: './stylesheets/config.rb',
                css: './stylesheets/css',
                sass: 'stylesheets/sass'
            }
        ))
        .pipe(gulp.dest('./stylesheets/css'));

    var jsFiles = gulp.src('./dist/index.js');

gulp.task('compile', function () {
    return gulp.src('scripts/main.jsx')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('dist/'));
});
gulp.task('insert', function () {
    return gulp.src('index.html')
        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
        .pipe(inject(es.merge(
            cssFiles,
            jsFiles
        )))
        .pipe(gulp.dest(''));
});
gulp.task('default', ['compile'], function () {
    gulp.watch('./scripts/**/*.jsx', ['compile'])
});