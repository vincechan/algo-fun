/**
 * In a non-empty array of integers, every number appears twice except for one,
 * find that single number.
 * @param arr
 */
export function find_single_number(arr: number[]): number {
  let x = arr[0];
  for (let i = 1; i < arr.length; i++) {
    x = x ^ arr[i];
  }
  return x;
}
