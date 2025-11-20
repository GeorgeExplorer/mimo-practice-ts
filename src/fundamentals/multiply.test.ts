import { multiply } from './multiply';

describe('multiply', () => {
  it('should multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should multiply by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  it('should multiply negative numbers', () => {
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(-2, -3)).toBe(6);
  });
});
