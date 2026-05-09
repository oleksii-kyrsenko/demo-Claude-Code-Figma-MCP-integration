describe('example unit test', () => {
  it('passes', () => {
    expect(1 + 1).toBe(2);
  });

  it('verifies string formatting', () => {
    const greeting = (name: string) => `hello ${name}`;
    expect(greeting('world')).toBe('hello world');
  });
});
