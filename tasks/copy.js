const gulp = require('gulp');

module.exports = () => {
  return gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/popper.js/dist/popper.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'src/js/quizStyle.js',
    'src/js/html2canvas.min.js'
  ])
    .pipe(gulp.dest('./docs/js'))
};
