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

  // key is not in arr, the min diff could be on left or right or final inspected element (mid)

  const min_diff = Math.abs(key - arr[mid]);

  // check left
  if (mid > 0 && Math.abs(key - arr[mid - 1]) < min_diff) {
    return arr[mid - 1];
  }
  // check right
  if (mid < arr.length - 1 && Math.abs(key - arr[mid + 1]) < min_diff) {
    return arr[mid + 1];
  }
  return arr[mid];
}
