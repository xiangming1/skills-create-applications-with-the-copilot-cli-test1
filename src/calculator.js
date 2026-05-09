#!/usr/bin/env node
/*
 CLI Calculator
 Supports operations: addition (add, +), subtraction (sub, -), multiplication (mul, *), division (div, /)
*/

const [,, op, aStr, bStr] = process.argv;

function printUsage() {
  console.log("Usage:\n  node src/calculator.js <operation> <num1> <num2>\n\nOperations:\n  add | +    : addition\n  sub | -    : subtraction\n  mul | *    : multiplication\n  div | /    : division\n\nExamples:\n  node src/calculator.js add 2 3    # => 5\n  node src/calculator.js div 8 2    # => 4");
}

if (!op || !aStr || !bStr) {
  console.error("Error: missing arguments. Expected operation and two numbers.");
  printUsage();
  process.exit(2);
}

const a = Number(aStr);
const b = Number(bStr);

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error("Error: both operands must be valid numbers.");
  printUsage();
  process.exit(2);
}

let result;

switch (op.toLowerCase()) {
  case 'add':
  case '+':
    // addition
    result = a + b;
    break;
  case 'sub':
  case '-':
    // subtraction
    result = a - b;
    break;
  case 'mul':
  case '*':
    // multiplication
    result = a * b;
    break;
  case 'div':
  case '/':
    // division
    if (b === 0) {
      console.error('Error: division by zero is not allowed.');
      process.exit(3);
    }
    result = a / b;
    break;
  case 'help':
  case '-h':
  case '--help':
    printUsage();
    process.exit(0);
  default:
    console.error(`Error: unsupported operation '${op}'.`);
    printUsage();
    process.exit(2);
}

console.log(result);
process.exit(0);
