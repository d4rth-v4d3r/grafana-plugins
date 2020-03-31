var gulp = require('gulp');
var sass = require('gulp-sass');
var sassUnicode = require('gulp-sass-unicode');

gulp.task('sass2css', function() {
  return gulp
    .src(['src/assets/sass/**.*'])
    .pipe(
      sass({
        includePaths: 'node_modules',
      })
    )
    .pipe(sassUnicode())
    .pipe(gulp.dest('src/assets/css/'));
});
