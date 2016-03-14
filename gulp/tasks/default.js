import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', () => {
  runSequence(
    [
      'png-sprite',
      'svg-sprite',
      'markup',
      'scss',
      'scripts:compile',
      'static'
    ],
    'livereload',
    'watch'
  );
});
