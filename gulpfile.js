var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function (){
   // Taking the path from the above object
   gulp.src('scss/*.scss')
   .pipe(sourcemaps.init())
   .pipe(sass({
       outputStyle: 'expanded',
   }))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('css/'))
});

gulp.task('watch', function(){
	gulp.watch('scss/**/*.scss', ['sass']);
});