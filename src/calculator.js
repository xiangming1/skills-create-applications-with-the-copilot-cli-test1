#!/usr/bin/env node
/*
 CLI Calculator
 Supports operations: addition (add, +), subtraction (sub, -), multiplication (mul, *), division (div, /)
*/
const calc = require('./lib/calculator');

const [,, op, aStr, bStr] = process.argv;

function printUsage(){ console.log("Usage:\n  node src/calculator.js <operation> <num1> <num2>\n\nOperations:\n  add | +    : addition\n  sub | -    : subtraction\n  mul | *    : multiplication\n  div | /    : division\n\nExamples:\n  node src/calculator.js add 2 3    # => 5\n  node src/calculator.js div 8 2    # => 4"); }

if(!op || !aStr || !bStr){ console.error("Error: missing arguments. Expected operation and two numbers."); printUsage(); process.exit(2); }

const a = Number(aStr); const b = Number(bStr);
if(Number.isNaN(a) || Number.isNaN(b)){ console.error("Error: both operands must be valid numbers."); printUsage(); process.exit(2); }

let result;
try{
  switch(op.toLowerCase()){
    case 'add': case '+': result = calc.add(a,b); break;
    case 'sub': case '-': result = calc.sub(a,b); break;
    case 'mul': case '*': result = calc.mul(a,b); break;
    case 'div': case '/': result = calc.div(a,b); break;
    case 'help': case '-h': case '--help': printUsage(); process.exit(0);
    default: console.error(`Error: unsupported operation '${op}'.`); printUsage(); process.exit(2);
  }
  console.log(result); process.exit(0);
}catch(e){
  if(e.message && e.message.includes('Division by zero')){ console.error('Error: division by zero is not allowed.'); process.exit(3); }
  console.error('Error:', e.message||e); process.exit(1);
}
