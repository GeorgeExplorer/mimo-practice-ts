import { solutionName } from './challenge-template';

describe('solutionName', () => {
  it('should handle basic case', () => {
    expect(solutionName('input')).toBe('expected');
  });

  it('should handle edge case', () => {
    expect(solutionName('')).toBe('');
  });
});
