import { truncate } from '../../utils/truncate';

describe('truncate', () => {
  it('throws when maxLength is negative', () => {
    expect(() => truncate('hello', -1)).toThrow(RangeError);
  });

  it('throws when maxLength is not an integer', () => {
    expect(() => truncate('hello', 2.5)).toThrow(RangeError);
  });

  it('throws when maxLength is NaN', () => {
    expect(() => truncate('hello', Number.NaN)).toThrow(RangeError);
  });

  it('returns the original string when shorter than maxLength', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  it('returns the original string when equal to maxLength', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });

  it('truncates and appends ellipsis when longer than maxLength', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });

  it('handles empty string', () => {
    expect(truncate('', 5)).toBe('');
  });
});
