var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

var uiFiles = ['src/**/*.ts'];


var compileUi = ts.createProject('src/tsconfig.json', {typescript: require('typescript')});
gulp.task('compileUi', function() {
    var tsResult = compileUi.src().pipe(ts(compileUi));
    return merge([
        tsResult.dts.pipe(gulp.dest('public/')),
        tsResult.js.pipe(gulp.dest('public/'))
    ]);
});

gulp.task('run', ['compileUi']);
gulp.task('default', ['compileUi']);
