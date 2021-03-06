var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass')(require('sass')),
    csso = require('gulp-csso'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin')

gulp.task('html', function(){
    return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'))
})

gulp.task('sass', ()=>{
    return gulp.src('sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/style'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/style'))
})

gulp.task('img', ()=>{
    return gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
})

gulp.task('build', gulp.series('html', 'sass', 'img'))