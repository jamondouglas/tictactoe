var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');


var files = mainBowerFiles();

// gulp.task('css', function() {
//   var cssFiles = ['src/css/*'];
//   gulp.src(plugins.mainBowerFiles().concat(cssFiles))
//     .pipe(plugins.filter('*.css'))
//     .pipe(plugins.concat('main.css'))
//     .pipe(plugins.uglify())
//     .pipe(gulp.dest(dest + 'css'));
//  });