/*
 Calculator functions module
 Supports: addition, subtraction, multiplication, division, modulo, power, squareRoot
*/
function add(a,b){ return a + b; }
function sub(a,b){ return a - b; }
function mul(a,b){ return a * b; }
function div(a,b){ if (b === 0) throw new Error('Division by zero'); return a / b; }
function modulo(a,b){ return a % b; }
function power(base, exponent){ return Math.pow(base, exponent); }
function squareRoot(n){ if (n < 0) throw new Error('Square root of negative number'); return Math.sqrt(n); }

module.exports = { add, sub, mul, div, modulo, power, squareRoot };
