import { average } from '../../utils/average';

describe('average', () => {
  it('returns the average of a list of numbers', () => {
    expect(average([1, 2, 3])).toBe(2);
  });

  it('returns the value for a single-element array', () => {
    expect(average([5])).toBe(5);
  });
});
