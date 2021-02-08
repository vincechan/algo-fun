/**
 * Given an array of numbers sorted in ascending order, find the range of a given number ‘key’.
 * The range of the ‘key’ will be the first and last position of the ‘key’ in the array.
 * Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].
 *
 * @param arr
 * @param key
 */
export function find_range(arr: number[], key: number): number[] {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === key) {
      // key is found
      // indlue all elements on the left side with same value
      let left = mid;
      while (left > 0 && arr[left] == arr[left - 1]) {
        left--;
      }
      // include all elements on the right side with same value
      let right = mid;
      while (right < arr.length - 1 && arr[right] === arr[right + 1]) {
        right++;
      }
      return [left, right];
    } else if (key < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return [-1, -1];
}
