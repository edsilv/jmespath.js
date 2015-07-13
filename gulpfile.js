var argv = require('yargs').argv,
    browserify = require('gulp-browserify'),
    Config = require('./gulpfile.config'),
    eslint = require('gulp-eslint'),
    exec = require('child_process').exec,
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');

var config = new Config();

gulp.task('browserify', function (cb) {
    return gulp.src(config.browserifySrc)
        .pipe(browserify({
            standalone: config.browserifyStandalone
        }))
        .pipe(rename(config.browserifyOut))
        .pipe(gulp.dest(config.dist));
});

gulp.task('uglify', function() {
    return gulp.src(config.dist + '/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(config.dist));
});

gulp.task('jshint', function() {
    return gulp.src(['jmespath.js', 'test/*.js', 'Gruntfile.js'])
        .pipe(jshint({
            '-W083': true
        }));
});

gulp.task('eslint', function () {
    return gulp.src(['jmespath.js'])
        .pipe(eslint());
});

gulp.task('default', function(cb) {
    runSequence('browserify', 'uglify', 'jshint', 'eslint', cb);
});