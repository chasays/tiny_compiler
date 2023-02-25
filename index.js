const compiler = require('./compiler');
const input = '(add 2 (sub 4 3))';
const output = compiler(input);
console.log(output);
json_output = JSON.stringify(output, stringify(output,null,2));
console.log(json_output);
add(2, sub(4,3)); // javascript
// (add 2 (sub 4 3)) // list