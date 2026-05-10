const TEST_BASE_URL = 'https://example.com';

jest.mock('@/env', () => ({
  env: { NEXT_PUBLIC_APP_URL: TEST_BASE_URL },
}));

// eslint-disable-next-line import/first
import sitemap from '@/app/sitemap';

// eslint-disable-next-line import/first
import robots from '@/app/robots';

describe('sitemap', () => {
  const result = sitemap();

  it('returns at least one entry', () => {
    expect(result.length).toBeGreaterThan(0);
  });

  it('includes the home page with absolute URL', () => {
    expect(result).toContainEqual(
      expect.objectContaining({
        url: TEST_BASE_URL,
        priority: 1.0,
      }),
    );
  });

  it.each(result)('entry "$url" is well-formed', (entry) => {
    expect(() => new URL(entry.url)).not.toThrow();
    expect(entry.lastModified).toBeInstanceOf(Date);
    if (entry.priority !== undefined) {
      expect(entry.priority).toBeGreaterThanOrEqual(0);
      expect(entry.priority).toBeLessThanOrEqual(1);
    }
  });
});

describe('robots', () => {
  const result = robots();

  it('points at the sitemap', () => {
    expect(result.sitemap).toBe(`${TEST_BASE_URL}/sitemap.xml`);
  });

  it('declares at least one rule covering all user agents', () => {
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    expect(rules.some((r) => r.userAgent === '*')).toBe(true);
  });

  it('disallows API and admin routes (both bare and trailing-slash variants)', () => {
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    const wildcard = rules.find((r) => r.userAgent === '*');
    expect(wildcard).toBeDefined();
    const disallow = Array.isArray(wildcard!.disallow)
      ? wildcard!.disallow
      : [wildcard!.disallow ?? ''];
    expect(disallow).toEqual(expect.arrayContaining(['/api', '/api/', '/admin', '/admin/']));
  });
});
