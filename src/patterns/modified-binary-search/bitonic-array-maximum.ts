/**
 * Find the maximum value in a given Bitonic array.
 * An array is considered bitonic if it is monotonically increasing and then monotonically decreasing.
 * Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].
 *
 * @param arr
 */
export function find_max_in_bitonic_array(arr: number[]): number {
  if (!arr.length || arr.length === 0) {
    return -1;
  }

  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  // start === end
  return arr[start];
}
