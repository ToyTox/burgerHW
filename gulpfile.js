const {
  src,
  dest,
  task,
  series,
  watch
} = require('gulp');
const clean = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

function handleClean() {
  return src('dist/**/*', {
    read: false
  }).pipe(clean())
}

function copyHtml() {
  return src('src/*.html')
    .pipe(dest('./dist'))
}

function copyImages() {
  return src('src/img/**/*')
    .pipe(dest('./dist/img'))
}

function handleStyles() {
  const styles = ['node_modules/normalize.css/normalize.css', 'src/css/index.scss'];

  return src(styles)
    .pipe(sourcemaps.init())
    .pipe(concat('index.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(px2rem({
      dpr: 1
    }))
    // .pipe(gcmq())
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(dest('./dist'))
}

function server() {
  watch('./src/*.html', series(copyHtml));
  watch('./src/img/**/*.*', series(copyImages));
  watch('./src/css/**/*.scss', series(handleStyles));

  browserSync.init({
    server: {
      baseDir: './dist',
    },
    open: false,
  });
}

exports.serve = series(handleClean, copyHtml, copyImages, handleStyles, server);
exports.build = series(handleClean, copyHtml, copyImages, handleStyles);
