var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var del = require('del');

var tsFiles = 'src/**/*.ts';
var htmlFiles = 'src/**/*.html';
var cssFiles = 'src/**/*.css';


gulp.task('clean', function () {
      del(['public']);
});

var compileTsFiles = ts.createProject('src/tsconfig.json', {typescript: require('typescript')});
gulp.task('compileTsFiles', function() {
    var tsResult = compileTsFiles.src().pipe(ts(compileTsFiles));
    return merge([
        tsResult.dts.pipe(gulp.dest('public/')),
        tsResult.js.pipe(gulp.dest('public/'))
    ]);
});

var compileHtmlFiles =[htmlFiles];
gulp.task('compileHtmlFiles', function() {
    return gulp.src(compileHtmlFiles)
        .pipe(gulp.dest('public/'));
});

var compileCssFiles =[cssFiles];
gulp.task('compileCssFiles', function() {
    return gulp.src(compileCssFiles)
        .pipe(gulp.dest('public/'));
});

gulp.task('run', ['clean', 'compileTsFiles', 'compileHtmlFiles', 'compileCssFiles']);
