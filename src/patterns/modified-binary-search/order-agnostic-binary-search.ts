/**
 * Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.
 * @param arr 
 * @param key 
 */
export function binary_search(arr: number[], key: number): number {
  const asc = arr.length > 1 && arr[0] < arr[1];

  return search(arr, asc, 0, arr.length - 1, key);
}

function search(
  arr: number[],
  asc: boolean,
  start: number,
  end: number,
  key: number
): number {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((end + start) / 2);

  if (arr[mid] === key) {
    return mid;
  } else if ((arr[mid] > key && asc) || (arr[mid] < key && !asc)) {
    return search(arr, asc, start, mid - 1, key);
  } else {
    return search(arr, asc, mid + 1, end, key);
  }
}
