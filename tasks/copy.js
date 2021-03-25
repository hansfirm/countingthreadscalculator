const gulp = require('gulp');

module.exports = () => {
  return gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/popper.js/dist/popper.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'src/js/tooly.js',
    'src/js/quizStyle.js'
  ])
    .pipe(gulp.dest('./docs/js'))
};
