var gulp = require('gulp');
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var minify = require('gulp-minify-css')
var minifyH = require('gulp-minify-html')
// 创建任务   gulp作用压缩 css js html

/*
*   1、第一个参数 任务的名称
*   2、具体执行的操作
*
*
* */
gulp.task('js',function () {
    // 1、找到想要压缩的文件
    // * 找到所有js
    gulp.src('./*.js')
    // .pipe 下一步 压缩
        .pipe(uglify())
        // 合并
        .pipe(concat('al.js'))
        //  gulp.dest  处理好的文件输出到哪里
        .pipe(gulp.dest("./"))
})
// css压缩
gulp.task('css',function () {
    gulp.src('./*.css')
        .pipe(minify())
        .pipe(gulp.dest('./css'))
})
gulp.task('html',function () {
    gulp.src('./index.html')
        .pipe(minifyH())
        .pipe(gulp.dest('./'))
})
// 执行任务   参数2 任务名称
gulp.task('default',['js','css','html']);
// 实时压缩 两个参数
// 1、监听什么文件  2、监听文件变化的时候执行的任务
gulp.watch('./*.js',['js']);
gulp.watch('./*.css',['css'])
