var gulp = require('gulp');

var sass      = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename    = require('gulp-rename');
var connect   = require('gulp-connect');

var paths = {
  sass: ['./scss/**/*.scss']
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

gulp.task('sass', function (done) {
  gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('default', ['sass']);
gulp.task('serve', ['sass', 'server', 'watch']);
