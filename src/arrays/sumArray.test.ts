import { sumArray } from './sumArray';

describe('sumArray', () => {
  it('should sum an array of numbers', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });

  it('should handle empty array', () => {
    expect(sumArray([])).toBe(0);
  });

  it('should handle negative numbers', () => {
    expect(sumArray([1, -2, 3, -4])).toBe(-2);
  });

  it('should handle single element', () => {
    expect(sumArray([5])).toBe(5);
  });
});
