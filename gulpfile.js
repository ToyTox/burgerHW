const { src, dest, task, series, watch } = require('gulp');
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

task('clean', () => {
  return src('dist/**/*', { read: false }).pipe(clean());
});

task('copy:html', () => {
  return src('src/*.html')
    .pipe(dest('dist'))
    .pipe(reload({ stream: true }));
});

task('copy:img', () => {
  return src('src/img/**/*')
    .pipe(dest('dist/img'))
    .pipe(reload({ stream: true }));
});

const styles = [
  // 'node_modules/normalize.css/normalize.css',
  'src/css/widgets/main.scss',
];

task('styles', () => {
  return (
    src(styles)
      .pipe(sourcemaps.init())
      .pipe(concat('main.scss'))
      .pipe(sassGlob())
      .pipe(sass().on('error', sass.logError))
      .pipe(px2rem({ dpr: 1 }))
      // .pipe(gcmq())
      .pipe(postcss([autoprefixer()]))
      .pipe(cleanCSS())
      .pipe(sourcemaps.write())
      .pipe(dest('dist'))
      .pipe(browserSync.stream())
  );
});

task('server', () => {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
    open: false,
  });
});

watch('./src/css/**/*.scss', series('styles'));
watch('./src/img/**/*.*', series('copy:img'));
watch('./src/*.html', series('copy:html'));

task('default', series('clean', 'copy:html', 'styles', 'copy:img', 'server'));
