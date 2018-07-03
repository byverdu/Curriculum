
const gulp = require( 'gulp' );
const browserify = require( 'browserify' );
const watchify = require( 'watchify' );
const uglify = require('gulp-uglify-es').default;
const source = require( 'vinyl-source-stream' );
const gutil = require( 'gulp-util' );
const buffer = require( 'vinyl-buffer' );
const sourcemaps = require( 'gulp-sourcemaps' );
const notify = require( 'gulp-notify' );
const babelify = require( 'babelify' );
const gls = require('gulp-live-server');

const filesToWatch = ['src/**.js', './index.html'];

function reportChange( event ) {
  console.log( `File ${event.path} was ${event.type} \nrunning tasks...` );
}

gulp.task( 'watch', () => {
  gulp.watch( filesToWatch, [ 'browserify' ])
    .on( 'change', reportChange );
});

gulp.task('serve', ['browserify'], () => {
  const server = gls.static('./', 8080);
  server.start();

  gulp.watch(filesToWatch, function (file) {
    // TODO, browser reloads before browserify ends
    setTimeout(() => {
      console.log('reloading the server');
      server.notify.apply(server, [file]);
    }, 1000);
  });
});

gulp.task( 'browserify', () => {
  // set up the browserify instance on a task basis
  const b = browserify({
    entries: './src/main.js',
    debug: true,
    transform: [ babelify ]
  });

  return b.bundle()
    .pipe( source( 'bundle.js' ))
    .pipe( buffer())
    .pipe( sourcemaps.init({ loadMaps: true }))
        // Add transformation tasks to the pipeline here.
        .pipe( uglify({ mangle: true }))
        .on( 'error', gutil.log )
    .pipe( sourcemaps.write( './' ))
    .pipe( gulp.dest( './dist' ))
    .pipe( notify({ message: 'Browserify completed' }));
});

gulp.task('default', ['browserify', 'serve', 'watch'], () => console.log('gulp running'))