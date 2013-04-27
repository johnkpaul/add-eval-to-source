var fs = require('fs'),
esprima = require('esprima'),
escodegen = require('escodegen'),
esmorph = require('esmorph');

function addEvalToSource(code) {
  'use strict';

  var newCode = esmorph.modify(code, esmorph.Tracer.FunctionEntrance(function(innerCode){
    return "eval('');";
  }));

  var formattedNewCode = escodegen.generate(esprima.parse(newCode));
  return formattedNewCode;
}

module.exports = exports = addEvalToSource;
