module.exports = function(grunt){
	
	// Configure Plugins
		grunt.initConfig({

			pkg: grunt.file.readJSON('package.json'),

			srcDirectory: "{%= src_dir_name %}",
			debugDirectory: "{%= debug_dir_name %}",
			buildDirectory: "{%= concat_dir_name %}",
			prodDirectory: "{%= prod_dir_name %}"
		});

	// Load Plugins	
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-contrib-cssmin'); 
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-copy');
		grunt.loadNpmTasks('grunt-html-build');
		grunt.loadNpmTasks('grunt-manifest');
}