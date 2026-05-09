import { formatDate, formatRelativeTime } from '../../utils/formatDate';

describe('formatDate', () => {
  it('formats a date in long format', () => {
    const date = new Date('2024-01-15');
    expect(formatDate(date)).toBe('January 15, 2024');
  });
});

describe('formatRelativeTime', () => {
  it('returns Today for current date', () => {
    expect(formatRelativeTime(new Date())).toBe('Today');
  });

  it('returns Yesterday for one day ago', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(formatRelativeTime(yesterday)).toBe('Yesterday');
  });

  it('returns days ago for less than a week', () => {
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    expect(formatRelativeTime(threeDaysAgo)).toBe('3 days ago');
  });

  it('returns weeks ago for less than a month', () => {
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    expect(formatRelativeTime(twoWeeksAgo)).toBe('2 weeks ago');
  });
});
