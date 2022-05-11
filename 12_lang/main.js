"use-strict";
// console.log('Hello');
// do(define(x, 10),
//    if(>(x, 5),
//       print("large"),
//       print("small")))

//Expressions of type "value" represent literal strings or numbers. Their value property contains the string or number value that they represent. Expressions of type "word" are used for identifiers (names). Such objects have a name property that holds the identifier’s name as a string. Finally, "apply" expressions represent applications. They have an operator property that refers to the expression that is being applied, as well as an args property that holds an array of argument expressions.


function parseExpression(program) {
    program = skipSpace(program);
    let match, expr;
    if (match = /^"([^"]*)"/.exec(program)) {
      expr = {type: "value", value: match[1]};
    } else if (match = /^\d+\b/.exec(program)) {
      expr = {type: "value", value: Number(match[0])};
    } else if (match = /^[^\s(),#"]+/.exec(program)) {
      expr = {type: "word", name: match[0]};
    } else {
      throw new SyntaxError("Unexpected syntax: " + program);
    }
  
    return parseApply(expr, program.slice(match[0].length));
  }
  
  function skipSpace(string) {
    let first = string.search(/\S/);
    if (first == -1) return "";
    return string.slice(first);
  }
  function parseApply(expr, program) {
    program = skipSpace(program);
    if (program[0] != "(") {
      return {expr: expr, rest: program};
    }
  
    program = skipSpace(program.slice(1));
    expr = {type: "apply", operator: expr, args: []};
    while (program[0] != ")") {
      let arg = parseExpression(program);
      expr.args.push(arg.expr);
      program = skipSpace(arg.rest);
      if (program[0] == ",") {
        program = skipSpace(program.slice(1));
      } else if (program[0] != ")") {
        throw new SyntaxError("Expected ',' or ')'");
      }
    }
    return parseApply(expr, program.slice(1));
  }


  function parse(program) {
      let {expr, rest} = parseExpression(program);
      if (skipSpace(rest) > 0) {
          throw new SyntaxError("Unexpected text after program")
      }
      return expr;
  }


  // console.log(parse("+(a, 10)"));

  const specialForms = Object.create(null);

  function evaluate(expr, scope) {
    if (expr.type == "value") {
      return expr.value;
    } else if (expr.type == "word") {
      if (expr.name in scope) {
        return scope[expr.name];
      } else {
        throw new ReferenceError(
          `Undefined binding: ${expr.name}`);
      }
    } else if (expr.type == "apply") {
      let {operator, args} = expr;
      if (operator.type == "word" &&
          operator.name in specialForms) {
        return specialForms[operator.name](expr.args, scope);
      } else {
        let op = evaluate(operator, scope);
        if (typeof op == "function") {
          return op(...args.map(arg => evaluate(arg, scope)));
        } else {
          throw new TypeError("Applying a non-function.");
        }
      }
    }
  }

  specialForms.if = (args, scope) => {
    if (args.length != 3) {
      throw new SyntaxError('Wrong number of args to IF need 3, have ' + args.length)
    } else if (evaluate(args[0], scope) !== false) { // is truthy
      return evaluate(args[1], scope);
    } else { //is falsy
      return evaluate(args[2], scope);
    }
  } // if is special form since we don't want to eval
    // args beforehand. That's a requirement for func.

  specialForms.while = (args, scope) => {
    if (args.length != 2) {
      throw new SyntaxError('Wrong number of args to WHILE need 2, have ' + args.length)
    } 
    while (evaluate(args[0], scope) !== false) { // is truthy
      evaluate(args[1], scope);
    }
    return false;
  }

  const assert_args_len = (args, len, cmd) => {
    if (args.length != len) {
      throw new SyntaxError(`Wrong number of args to ${cmd} need ${len}, have ${args.length}`)
    } 
  }
  
  specialForms.do = (args, scope) => {
    let value = false;
    for(let arg of args) {
      value = evaluate(arg, scope)
    }
    return value;
  }

  specialForms.define = (args, scope) => {
    assert_args_len(args, 2, 'define')
    if (args[0].type !== 'word') {
      throw new SyntaxError(`Bad use of define, arg[0] is ${arg[0].type} should be 'word'`)
    }
    let value = evaluate(args[1],scope);
    scope[args[0].name] = value;
    return value;
  }


  const topScope = Object.create(null);
  topScope.true = true;
  topScope.false = false;

  let prog = parse(`if(true, false, true)`)
  // console.log(evaluate(prog, topScope));

  for (const op of ["+","-","*","/","==","<",">"]) {
    topScope[op] = Function('a,b', `return a ${op} b;`);
  }

  topScope.print = value => {
    console.log(value);
    return value;
  }

function run(program) {
  return evaluate(parse(program), Object.create(topScope))
}

// run(`
// do(define(total, 0),
//    define(count, 1),
//    while(<(count, 11),
//          do(define(total, +(total, count)),
//             define(count, +(count, 1)))),
//    print(total))
// `);

specialForms.fun = (args, scope) => {
  if (!args.length) {
    throw new SyntaxError('Function needs a body');
  }
  let body = args[args.length - 1];
  let params = args.slice(0, args.length - 1).map(
    (expr,index) => {
      if (expr.type != 'word') {
        throw new SyntaxError(`Parameter ${index} must be of type word, is ${expr.type}.`)
      }
      return expr.name;
    }
  );

  return function() {
    if (arguments.length != params.length) {
      throw new TypeError("Wrong number of arguments");
    }

    let localScope = Object.create(scope);
    for (let i = 0; i < arguments.length; i++) {
      localScope[params[i]] = arguments[i]
    }
    return evaluate(body, localScope);
  }
}


// run(`
// do(define(plusOne, fun(a, +(a, 1))),
//    print(plusOne(10)))
// `);

// run(`
// do(
//   define(fib, fun(n, 
//     if(<(n,1), 
//       1,
//       +(fib(-(n,2)), fib(-(n,1)) )
//     )
//   )),
//   print(fib(3))
// )
// `);


topScope.array = (...args) => {
  let scope;
  [args,scope] = [args.slice(0,-1),args.slice(-1)];
  let value = [];
  console.log(args);
  for(let arg of args) {
    value.push( evaluate(arg, scope) );
  }
  return value;
};

topScope.length = (args, scope) => {
  return args[0].length;
};

topScope.element = (args, scope) => {
  assert_args_len(args, 2, 'element')
  return args[0][Number(args[1])];
};

run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`);