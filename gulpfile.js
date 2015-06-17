var gulp = require('gulp'),
    sass = require('gulp-sass');

var path = {
  assets: './public/assets/',
  build: './public/assets/build/'
}

gulp.task('sass', function () {
  gulp.src(path.assets + 'sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.build + 'css'));
});

gulp.task('watch', function() {
  gulp.watch(path.assets + 'sass/*.scss', ['sass']);
});
