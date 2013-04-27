var fs = require('fs');
var should = require('chai').should();
var addEvalToSource = require('../index');
var parse = require('esprima').parse;

describe('addEvalToSource', function(){
  'use strict';

  describe('when acting on expressions', function(){
    it('should add eval(\'\') correctly', function(){
      var expected = fs.readFileSync(__dirname+'/fixtures/expected-expression.js').toString();
      var actual = addEvalToSource(fs.readFileSync(__dirname+'/fixtures/expression.js').toString());
      parse(actual).should.deep.equal(parse(expected));
    });
  });

  describe('when acting on declarations', function(){
    it('should add eval(\'\') correctly', function(){
      var expected = fs.readFileSync(__dirname+'/fixtures/expected-declaration.js').toString();
      var actual = addEvalToSource(fs.readFileSync(__dirname+'/fixtures/declaration.js').toString());
      parse(actual).should.deep.equal(parse(expected));
    });
  });
});
