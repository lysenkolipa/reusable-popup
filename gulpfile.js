const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass'),
      rimraf = require('rimraf'),
      rename = require('gulp-rename');

/*------------  Server  -------------*/
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });
    gulp.watch('build/**/*').on('change', browserSync.reload);
});

/*------------ HTML build -------------*/
gulp.task('html:build', function buildHTML() {
    return gulp.src('source/index.html')
        .pipe(gulp.dest('build'))
});

/*------------ Styles build -------------*/
gulp.task('styles:build', function () {
    return gulp.src('source/styles/style.scss')
        .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('build/css'));
});

/*------------ JS -------------*/
gulp.task('js:build',function() {
    return gulp.src('source/js/script.js')
        .pipe(gulp.dest('build/js'));
});

/*------------ Delete -------------*/
gulp.task('clean', function del(cb){
    return rimraf('build', cb);
});

/*------------ Copy images -------------*/
gulp.task('copy:images', function(){
    return gulp.src('./source/images/**/*.*')
        .pipe(gulp.dest('build/images'));
});

/*------------ Copy -------------*/
gulp.task('copy', gulp.parallel('copy:images'));

/*------------ Watchers ---------*/
gulp.task('watch', function() {
    gulp.watch('source/index.html', gulp.series('html:build'));
    gulp.watch('source/styles/**/*.scss', gulp.series('styles:build'));
    gulp.watch('source/js/**/*.js', gulp.series('js:build'));
});

/*---------- Gulp default -------*/
gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('html:build', 'styles:build', 'js:build', 'copy'),
    gulp.parallel('watch', 'server')
    )
);