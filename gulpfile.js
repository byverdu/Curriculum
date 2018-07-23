const gulp = require( 'gulp' );
const paths = require( './gulp/paths' );
require( 'require-dir' )( './gulp/tasks' );

const optionsBase64 = {
  extensions: ['svg', 'png', 'jpg', /\.jpg#datauri$/i],
  deleteAfterEncoding: false,
  // debug: true
};

gulp.task( 'static-assets', ['clean'], () => {
  return gulp.src( paths.staticAssets )
    .pipe( gulp.dest( paths.destFolder ));
});

const commonTasks = ['clean', 'static-assets', 'browserify', 'sass', 'css-minify'];
const taskLogger = taskName => console.log( `gulp ${taskName} task running` );

gulp.task( 'build', commonTasks, taskLogger( 'build' ));
gulp.task( 'dev', [...commonTasks, 'serve', 'watch'], taskLogger( 'dev' ));
gulp.task( 'start', ['build', 'serve'], taskLogger( 'start' ));
