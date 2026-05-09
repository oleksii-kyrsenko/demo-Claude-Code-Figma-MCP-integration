describe('example integration test', () => {
  it('passes', () => {
    expect(true).toBe(true);
  });

  it('verifies array operations', () => {
    const items = [1, 2, 3];
    expect(items.filter((n) => n > 1)).toEqual([2, 3]);
  });
});
