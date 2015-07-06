var gulp = require('gulp');

var sass      = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename    = require('gulp-rename');
var connect   = require('gulp-connect');
var watch = require('gulp-watch');

var paths = {
  sass:       ['./scss/**/*.scss'],
  templates:  ['./**/*.html']
};

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('server', function() {
  connect.server({
    livereload: true,
    port: 1337,
    host: "localhost"
  });
});

gulp.task('livereload', function() {
  gulp.src(['css/*.css', 'shared/**/*.js', 'component/**/*.js', '**/*.html'])
    .pipe(watch(['css/*.css', 'shared/**/*.js', 'component/**/*.js', '**/*.html']))
    .pipe(connect.reload());
});

gulp.task('sass', function (done) {
  gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css/'))
    .on('end', done);
});

gulp.task('default', ['sass']);
gulp.task('serve', ['sass', 'server', 'livereload', 'watch']);
