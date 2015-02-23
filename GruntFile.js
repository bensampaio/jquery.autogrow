module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      plugin : {
        options: {
          compress : true
        },
        files: {
          'jquery.autogrow.min.js': [ 'jquery.autogrow.js' ],
        },
      }
    }
  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};