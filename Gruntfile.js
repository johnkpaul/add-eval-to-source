module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'index.js',
        'test/**/*.js',
        '!test/fixtures/*.js'
      ]
    },
    simplemocha: {
      options: {
        globals: ['chai'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'tap'
      },

      all: {
        src: ['test/test.js']
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'simplemocha']);


};
