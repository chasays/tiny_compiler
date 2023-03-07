const compiler = require('./compiler');
const input = '(add 2 (sub 4 3))';
const output = compiler(input);
// json_output = JSON.stringify(output,null,2);
console.log(output);
// add(2, sub(4,3)); // javascript
// (add 2 (sub 4 3)) // list