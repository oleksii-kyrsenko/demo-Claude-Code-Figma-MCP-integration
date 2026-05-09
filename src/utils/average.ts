export function average(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new RangeError('Cannot calculate average of an empty array');
  }
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  return sum / numbers.length;
}
