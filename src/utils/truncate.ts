export function truncate(text: string, maxLength: number): string {
  if (!Number.isInteger(maxLength) || maxLength < 0) {
    throw new RangeError('maxLength must be a non-negative integer');
  }
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}
