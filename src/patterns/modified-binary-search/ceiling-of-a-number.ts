/**
 * Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’.
 * The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.
 * Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.
 * @param arr
 * @param key
 */
export function search_ceiling_of_a_number(arr: number[], key: number): number {
  let start = 0,
    end = arr.length - 1,
    mid = 0;

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // when we exit the loop, the last examined number (mid) will the the closest to the key
  // ceiling is either mid or mid + 1
  if (arr[mid] > key) {
    return mid;
  } else if (mid + 1 < arr.length && arr[mid + 1] > key) {
    return mid + 1;
  }

  return -1;
}
