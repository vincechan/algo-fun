/**
 * Given an array of numbers sorted in ascending order,
 * find the element in the array that has the minimum difference with the given ‘key’.
 *
 * @param arr
 * @param key
 */
export function search_min_diff_element(arr: number[], key: number): number {
  // perform binary search
  let start = 0,
    end = arr.length - 1,
    mid = 0;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key === arr[mid]) {
      return key;
    } else if (key < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // at the end of loop, start === end + 1
  // number closest to key would be pointed to by start or end
  if (
    start < arr.length &&
    Math.abs(key - arr[start]) < Math.abs(key - arr[end])
  ) {
    return arr[start];
  }
  return arr[end];
}
