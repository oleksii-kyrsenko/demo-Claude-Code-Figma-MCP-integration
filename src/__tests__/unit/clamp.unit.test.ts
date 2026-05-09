import { clamp } from '../../utils/clamp';

describe('clamp', () => {
  it('returns the bound when min equals max', () => {
    expect(clamp(5, 7, 7)).toBe(7);
    expect(clamp(2, 3, 3)).toBe(3);
  });

  it('returns value when within range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('returns min when value is below range', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it('returns max when value is above range', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it('returns value when equal to min', () => {
    expect(clamp(0, 0, 10)).toBe(0);
  });

  it('returns value when equal to max', () => {
    expect(clamp(10, 0, 10)).toBe(10);
  });

  it('throws when min is greater than max', () => {
    expect(() => clamp(5, 10, 0)).toThrow(RangeError);
  });
});
