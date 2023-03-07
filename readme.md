# implement tiny compiler in javascript

[refer this link](https://citw.dev/tutorial/create-your-own-compiler)

1. at first, you should install node.js tool
2. run js `node index.js`
3. will see `add(2, sub(4, 3));`, it works.


## compiler progress

Step1~2 own frontend, step3~4 are backend, meanwhile, also have toolchain team to hold some tools dev

  1. Lexical Analysis - Breaks the input code (string) into the basic syntax of the language (array of objects)
  2. Syntactic Analysis - Transforms the tokens (array of objects) into an AST (tree of objects) which represents our program
  3. Transformation - Transforms our original Lisp AST into  our target Javascript AST
  4. Code Generation - Transforms our target AST (object of objects) into actual code (string)

