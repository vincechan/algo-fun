/**
 * Given a Bitonic array, find if a given ‘key’ is present in it.
 * An array is considered bitonic if it is monotonically increasing and then monotonically decreasing.
 * Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].
 * Write a function to return the index of the ‘key’. If the ‘key’ is not present, return -1.
 *
 * @param arr
 * @param key
 */
export function search_bitonic_array(arr: number[], key: number): number {
  const max_index = find_max(arr);
  const left = binary_search(arr, 0, max_index, key);
  if (left != -1) {
    return left;
  }
  return binary_search(arr, max_index, arr.length - 1, key);
}

/**
 * return the index of element with max value of a bitonic array
 *
 * @param arr bitonic array
 */
function find_max(arr: number[]) {
  let start = 0,
    end = arr.length;
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}

/**
 * search arr to return index of element with same value as key, return -1 if not found
 *
 * @param arr
 * @param key
 */
function binary_search(
  arr: number[],
  start: number,
  end: number,
  key: number
): number {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (key < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
