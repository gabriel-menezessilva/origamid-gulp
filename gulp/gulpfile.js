const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

function compilaSass() {
  return gulp
    .src("css/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("css/"))
    .pipe(browserSync.stream());
}

gulp.task("default", compilaSass);

function browser() {
  browserSync.init({
    server: {
        baseDir: "./"
    },
  });
}

gulp.task('browser-sync', browser);

function watch() {
  gulp.watch("css/scss/*.scss", compilaSass);
}

gulp.task('watch', watch);

gulp.task("default", gulp.parallel('watch', 'browser-sync'));
