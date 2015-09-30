var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    cssmin      = require('gulp-cssmin'),
    prefix      = require('gulp-autoprefixer'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

var vendors = [
    '_assets/bower_components/jquery/jquery.min.js',
    '_assets/bower_components/underscore/underscore-min.js',
    '_assets/bower_components/backbone/backbone-min.js'
]


gulp.task('styles', function() {
  gulp.src('_assets/scss/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(cssmin())
    .pipe(gulp.dest('web/css'))
    .pipe(browserSync.stream());
});


gulp.task('js:scripts', function() {
  gulp.src('_assets/js/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('web/js'))
    .pipe(browserSync.stream());

});

gulp.task('js:vendors', function() {
  gulp.src(vendors)
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('web/js'))
})


gulp.task('watch', function() {
    gulp.watch('_assets/scss/**/*.scss', ['styles']);
    gulp.watch('_assets/js/**/*.js', ['js:scripts']);
});


gulp.task('build', ['styles', 'js:scripts'], function() {
    console.log('build assets')
});


gulp.task('serve', ['build'], function() {
    browserSync.init({
        server: "./web"
    });
    gulp.watch('_assets/scss/**/*.scss', ['styles']);
    gulp.watch('_assets/js/**/*.js', ['js:scripts']);
    gulp.watch("web/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
