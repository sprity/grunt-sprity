/*
 * grunt-sprity
 * https://github.com/aslansky/grunt-sprity
 *
 * Copyright (c) 2014 Alexander Slansky
 * Licensed under the MIT license.
 */

'use strict';

var sprity = require('sprity');
var path = require('path');

module.exports = function (grunt) {
  var logger = {
    log: function (msg) {
      grunt.log.writeln(msg);
    },
    warn: function (msg) {
      grunt.log.debug(msg, 'warn');
    },
    debug: function (msg) {
      grunt.log.debug(msg, 'debug');
    },
    error: function (msg) {
      grunt.log.error(msg, 'error');
    },
    success: function (msg) {
      grunt.log.ok(msg);
    }
  };

  grunt.registerMultiTask('sprity', 'Grunt task for generating css sprites and corresponding stylesheets.', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      out: '',
      name: 'sprite',
      style: null,
      dimension: [{ratio: 1, dpi: 72}],
      engine: 'lwip',
      cssPath: '../images',
      format: 'png',
      processor: 'css',
      orientation: 'vertical',
      margin: 5,
      prefix: 'icon',
      background: '#FFFFFF',
      sort: true,
      split: false,
      opacity: 0,
      'style-indent-char': 'space',
      'style-indent-size': 2,
      logger: logger
    });

    var done = this.async();

    this.files.forEach(function (f) {
      options.src = f.orig.src;
      options.name = path.basename(f.dest);
      options.out = path.dirname(f.dest);

      sprity.create(options, function (e) {
        if (e) {
          grunt.log.error(e.toString());
        }
        else {
          grunt.log.ok('File ' + f.dest + ' created.');
        }
        done();
      });
    });

  });
};
