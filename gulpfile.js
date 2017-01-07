var gulp = require('gulp'),
	responsive = require('gulp-responsive-images');


gulp.task('images', function(){
	gulp.src('img_src/*')
		.pipe(responsive({
			'*.png': [{
        	width: 800,
        	suffix: '-800_1x',
        	quality: 40
        	
      	},{
      		width: 500,
        	suffix: '-500',
        	quality: 70
        },{
        	width:400,
        	suffix:'-small',
        	quality: 50
        },{
        	quality: 100,
        	suffix: '-large'
        }]
  	    }))
		.pipe(gulp.dest('images/'));
});

gulp.task('default', ['images']);