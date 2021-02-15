/**
 * Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number,
 * find if a given ‘key’ is present in it.
 * Write a function to return the index of the ‘key’ in the rotated array.
 * If the ‘key’ is not present, return -1.
 * You can assume that the given array does not have any duplicates.
 *
 * @param arr sorted array rotated by some arbitrary number. e.g. [10, 15, 1, 3, 8]
 * @param key key to search for
 * @returns index of the 'key'
 */
export function search_rotated_array(arr: number[], key: number): number {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[start] < arr[mid]) {
      // left is sorted
      if (key < arr[mid] && key >= arr[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // right is sorted
      if (key > arr[mid] && key <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}
