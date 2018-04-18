/**
 * Created by mrlee on 2018/4/18.
 */
let gulp = require('gulp');
let jade = require('gulp-jade');

let less = require('gulp-less');
let prefixer = require('autoprefixer');
let postcss = require('gulp-postcss');
let minifyCss = require('gulp-minify-css');
let cssnext = require('cssnext');
let precss = require('precss');

let paths = {
    jade: {
        src: ['./_src/jade/**/*.jade', './_src/jade/**/*.pug'],
        dest: './dist/html/'
    },
    less: {
        src: './_src/less/**/*.less',
        dest: './dist/css/'
    }
}

gulp.task('jade', () => {
    return gulp.src(paths.jade.src)
        .pipe(jade({ pretty: true }))
        .pipe(gulp.dest(paths.jade.dest));
});

gulp.task('less', () => {
    let processer = [prefixer, cssnext, precss];
    return gulp.src(paths.less.src)
        .pipe(less())
        .pipe(postcss(processer))
        .pipe(minifyCss())
        .pipe(gulp.dest(paths.less.dest));
})

gulp.task('default', ['jade', 'less']);
