module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      plugin : {
        files : {
          'dist/jquery.autogrow.min.css': [ 'src/jquery.autogrow.css' ],
        }
      }
    },
    uglify: {
      options: {
        compress : {}
      },
      plugin : {
        files: {
          'dist/jquery.autogrow.min.js': [ 'src/jquery.autogrow.js' ],
        },
      }
    }
  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', [ 'cssmin', 'uglify' ]);

};