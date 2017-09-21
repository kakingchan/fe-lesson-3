var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var rename = require('gulp-rename');

var path = {
    src: 'src/**/*.es',
    dist: 'core/'
}

gulp.task('babel', function() {
    gulp.src(path.src) // 多个文件目录  参数为数组  
        .pipe(babel())
        .pipe(rename({ extname: '.js' }))
        .pipe(gulp.dest(path.dist));
});

var watcher = gulp.watch(['src/**/*.es'], ['babel']);

watcher.on('change', function(e) {
    console.log('File ' + e.path + ' was ' + e.type + ', running tasks...')
});

gulp.task('default', ['babel']);