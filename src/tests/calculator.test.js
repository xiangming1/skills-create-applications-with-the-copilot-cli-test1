const calc = require('../lib/calculator');

describe('Calculator functions', () => {
  test('addition: 2 + 3 = 5', () => { expect(calc.add(2,3)).toBe(5); });
  test('subtraction: 10 - 4 = 6', () => { expect(calc.sub(10,4)).toBe(6); });
  test('multiplication: 45 * 2 = 90', () => { expect(calc.mul(45,2)).toBe(90); });
  test('division: 20 / 5 = 4', () => { expect(calc.div(20,5)).toBe(4); });

  test('division by zero throws', () => { expect(() => calc.div(5,0)).toThrow(/Division by zero/); });

  // additional edge cases
  test('floats: 0.1 + 0.2 approx 0.30000000000000004', () => { expect(calc.add(0.1,0.2)).toBeCloseTo(0.30000000000000004); });
  test('negative numbers: -2 * 3 = -6', () => { expect(calc.mul(-2,3)).toBe(-6); });
});
