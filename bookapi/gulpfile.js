var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'); //gulp is mere a task runner,requires gulp-nodemon

gulp.task('default', function () {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 8000
        },
        ignore: ['./node_module/**']
    })
        .on('restart', function () {
            console.log('Restarting');
        });
});



