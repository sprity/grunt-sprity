'use strict';

var grunt = require('grunt');

exports.css_sprite = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options.png');
    var expected = grunt.file.read('test/expected/default_options.png');
    test.equal(actual, expected, 'should generate sprite as expected.');

    test.done();
  },
  custom_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/sprite.css');
    var expected = grunt.file.read('test/expected/custom_options.css');
    test.equal(actual, expected, 'css should look like expected');

    test.done();
  }
};
