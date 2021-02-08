import { readFile } from "fs";

/**
 * Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.
 *
 * @param arr
 */
export function shortest_window_sort(arr: number[]): number {
  return use_sorted_array(arr);
}

function use_sorted_array(arr: number[]): number {
  // this is not optimial -> uses sorted array and need nlogn time

  // create a sorted array
  // find start of the unsorted subarray
  // find end of the unsorted subarray

  const sorted = [...arr].sort((a, b) => a - b);

  // move left pointer to start of the subarray that need to be sorted
  let left = 0;
  while (left < arr.length && arr[left] === sorted[left]) {
    left++;
  }

  // if we reach the end, the array has been sorted
  if (left == arr.length) {
    return 0;
  }

  // move right pointer to end of the subarray that need to be sorted
  let right = sorted.length - 1;
  while (right >= 0 && sorted[right] === arr[right]) {
    right--;
  }

  return right - left + 1;
}
