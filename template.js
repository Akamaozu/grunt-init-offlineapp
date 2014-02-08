/*
* grunt-init-offlineapp
*/

// Basic template description.
exports.description = 'Grunt Scaffolding for Creating Offline-Capable Webapps';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Reduce friction in project launch by creating a standard project boilerplate for any projects that have offline capabilities';

// Template-specific notes to be displayed after question prompts.
exports.after = '\nGOOD TO GO! \n\n' + 
                'Get started by running _npm install_ in command prompt / terminal.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

    init.process({type: 'grunt'}, [
    
        // Prompt for these values.
        init.prompt('name'),
        init.prompt('description', 'Just another Offline-Capable Webapp'),
        init.prompt('version', '0.0.0'),
        {
            name: "src_dir_name",
            message: "Source Files Directory Name",
            default: "src"
        },
        {
            name: "debug_dir_name",
            message: "Debug Version Directory Name",
            default: "debug"
        },
        {
            name: "concat_dir_name",
            message: "Concatenated Files Directory Name",
            default: "svelte"
        },
        {
            name: "prod_dir_name",
            message: "Production Files Directory Name",
            default: "prod"
        },
    ], function(err, props) {

        // Set a few grunt-plugin-specific properties.
        props.devDependencies = {

            "grunt-contrib-jshint": "~0.8.0",
            "grunt-contrib-uglify": "~0.2.7",
            "grunt-contrib-cssmin": "~0.7.0",
            "grunt-contrib-watch": "~0.5.3",
            "grunt-contrib-copy": "~0.4.1",
            "grunt-html-build": "~0.3.1",
            "grunt-manifest": "~0.4.0"
        };

        // Files to copy (and process).
        var files = init.filesToCopy(props);
        var join = require("path").join;

        // create directories
        grunt.file.mkdir( join(init.destpath(), props.src_dir_name) );
        grunt.file.mkdir( join(init.destpath(), props.debug_dir_name) );
        grunt.file.mkdir( join(init.destpath(), props.concat_dir_name) );
        grunt.file.mkdir( join(init.destpath(), props.prod_dir_name) );

        // Actually copy (and process) files.
        init.copyAndProcess(files, props);

        // Generate package.json file.
        init.writePackageJSON('package.json', props);

        // All done!
        done();
    });
};