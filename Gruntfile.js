/*
 * grunt-sprity
 * https://github.com/sprity/grunt-sprity
 *
 * Copyright (c) 2015 Alexander Slansky
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    eslint: {
      target: ['index.js']
    },

    clean: [
      'tmp'
    ],

    sprity: {
      default_options: {
        options: {},
        files: {
          'tmp/default_options': ['test/fixtures/camera.png', 'test/fixtures/command.png']
        }
      },
      custom_options: {
        options: {
          style: 'sprite'
        },
        files: {
          'tmp/custom_options': ['test/fixtures/*']
        }
      }
    },

    nodeunit: {
      all: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'sprity', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'eslint']);

};
