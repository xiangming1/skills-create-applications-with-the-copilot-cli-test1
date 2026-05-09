#!/usr/bin/env node
/*
 CLI Calculator
 Supports operations: addition (add, +), subtraction (sub, -), multiplication (mul, *), division (div, /), modulo (mod, %), power (pow, ^), square root (sqrt)
*/
const calc = require('./lib/calculator');

const args = process.argv.slice(2);
const op = args[0] && args[0].toLowerCase();

function printUsage(){ console.log("Usage:\n  node src/calculator.js <operation> <num1> <num2?>\n\nOperations:\n  add | +    : addition\n  sub | -    : subtraction\n  mul | *    : multiplication\n  div | /    : division\n  mod | %    : modulo (remainder)\n  pow | ^    : exponentiation (base exponent)\n  sqrt       : square root (single operand)\n\nExamples:\n  node src/calculator.js add 2 3    # => 5\n  node src/calculator.js pow 2 8    # => 256\n  node src/calculator.js sqrt 16    # => 4"); }

if(!op){ console.error('Error: missing operation.'); printUsage(); process.exit(2); }

try{
  let result;
  if(op === 'sqrt'){
    const aStr = args[1];
    if(!aStr){ console.error('Error: sqrt requires one operand.'); printUsage(); process.exit(2); }
    const a = Number(aStr);
    if(Number.isNaN(a)){ console.error('Error: operand must be a valid number.'); process.exit(2); }
    result = calc.squareRoot(a);
  } else {
    const aStr = args[1];
    const bStr = args[2];
    if(!aStr || !bStr){ console.error('Error: operation requires two operands.'); printUsage(); process.exit(2); }
    const a = Number(aStr); const b = Number(bStr);
    if(Number.isNaN(a) || Number.isNaN(b)){ console.error('Error: both operands must be valid numbers.'); process.exit(2); }

    switch(op){
      case 'add': case '+': result = calc.add(a,b); break;
      case 'sub': case '-': result = calc.sub(a,b); break;
      case 'mul': case '*': result = calc.mul(a,b); break;
      case 'div': case '/': result = calc.div(a,b); break;
      case 'mod': case '%': result = calc.modulo(a,b); break;
      case 'pow': case '^': result = calc.power(a,b); break;
      default: console.error(`Error: unsupported operation '${op}'.`); printUsage(); process.exit(2);
    }
  }
  console.log(result);
  process.exit(0);
} catch(e){
  if(e.message && e.message.includes('Division by zero')){ console.error('Error: division by zero is not allowed.'); process.exit(3); }
  if(e.message && e.message.includes('Square root of negative')){ console.error('Error: square root of negative number is not allowed.'); process.exit(3); }
  console.error('Error:', e.message||e);
  process.exit(1);
}
