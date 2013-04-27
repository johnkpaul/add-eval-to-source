# Add Eval To Source

This node module exports a single function that takes in a string of JavaScript source, and returns a new string that has `eval('');` as the first line of every function's body. 

This is intended to be used to instrument code in development such that the chrome debugger/firebug allows inspection of all closure scoped variables. More information can be found in [my blog post](http://johnkpaul.com/blog/2013/04/03/javascript-debugger-surprises/).

## Usage

```javascript

var addEvalToSource = require('add-eval-to-source');

var source = 'function test(){}';

addEvalToSource(source); //'function test() {\n    eval(\'\');\n}'

```
