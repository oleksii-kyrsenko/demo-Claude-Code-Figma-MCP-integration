import { formatDate, formatRelativeTime } from '../../utils/formatDate';

describe('formatDate', () => {
  it('formats a date in long format', () => {
    const date = new Date(2024, 0, 15);
    expect(formatDate(date)).toBe('January 15, 2024');
  });
});

describe('formatRelativeTime', () => {
  const fixedNow = new Date(2026, 4, 9, 12, 0, 0);

  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(fixedNow);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('returns Today for current date', () => {
    expect(formatRelativeTime(new Date(fixedNow))).toBe('Today');
  });

  it('returns Yesterday for one day ago', () => {
    const yesterday = new Date(fixedNow);
    yesterday.setDate(yesterday.getDate() - 1);
    expect(formatRelativeTime(yesterday)).toBe('Yesterday');
  });

  it('returns days ago for less than a week', () => {
    const threeDaysAgo = new Date(fixedNow);
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    expect(formatRelativeTime(threeDaysAgo)).toBe('3 days ago');
  });

  it('returns weeks ago for less than a month', () => {
    const twoWeeksAgo = new Date(fixedNow);
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    expect(formatRelativeTime(twoWeeksAgo)).toBe('2 weeks ago');
  });

  it('returns formatted date for future dates', () => {
    const tomorrow = new Date(fixedNow);
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(formatRelativeTime(tomorrow)).toBe('May 10, 2026');
  });

  it('returns formatted date for 30+ days ago', () => {
    const fortyDaysAgo = new Date(fixedNow);
    fortyDaysAgo.setDate(fortyDaysAgo.getDate() - 40);
    expect(formatRelativeTime(fortyDaysAgo)).toBe('March 30, 2026');
  });

  it('returns singular form for 1 week ago', () => {
    const oneWeekAgo = new Date(fixedNow);
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    expect(formatRelativeTime(oneWeekAgo)).toBe('1 week ago');
  });
});
