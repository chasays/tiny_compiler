const traverse = require('./traverse')
module.expports = function transformer(originalAST) {
    const jsAST = {
        type: 'Program',
        body: []
    };

    let position = jsAST.body;
    
    traverse(originalAST,{
        NumberLiteral(node) {
            position.push({
                type: 'NumbericLiteral',
                value: node.value
            });
        },
        CallExpression(node, parent) {
            let expression = {
                type: 'CallExpression',
                callee: {
                    type:'Identifier',
                    name:node.name
                },
                arguments: []
            };
            const prevPosition = position;
            position = expression.arguments;
            if (parent.type !== 'CallExpression') {
                expression = {
                    type: 'ExpressionStatement',
                    expression
                };
            }
            prevPosition.push(expression);
        }
    });
    return jsAST;
}