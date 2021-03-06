'use strict';

var grunt = require('grunt');
var profanities = require('../tasks/profanities');

exports.profanities = {
  setUp: function(done) {
    done();
  },
  defaultOptions: function(test) {
    test.expect(1);

    var code = grunt.file.read('test/fixtures/bad_code.js');
    
    test.equal("a", code, 'should describe what the default behavior is.');

    test.done();
  },
  customOptions: function(test) {
    test.expect(1);

    var comments = grunt.file.read('test/fixtures/bad_comments.js');
    test.equal("a", comments, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
};
