import { readFile } from "fs";

/**
 * Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.
 *
 * @param arr
 */
export function shortest_window_sort(arr: number[]): number {
  // return use_sorted_array(arr);

  // 1. find first unsorted element from the beginning
  let left = 0;
  while (left < arr.length - 1 && arr[left] <= arr[left + 1]) {
    left++;
  }

  if (left == arr.length - 1) {
    // all elements sorted
    return 0;
  }

  // 2. find first unsorted element from the end
  let right = arr.length - 1;
  while (right > 0 && arr[right - 1] <= arr[right]) {
    right--;
  }

  // 3. find min and max in the unsorted subarray
  let min = Infinity,
    max = -Infinity;
  for (let i = left; i <= right; i++) {
    min = Math.min(arr[i], min);
    max = Math.max(arr[i], max);
  }

  // 4. extend subarray to include any number bigger than min on the left side of subarray
  while (left >= 0 && arr[left - 1] > min) {
    left--;
  }

  // 5. extend subarray to include any number smaller than max on the right side of subarray
  while (right <= arr.length - 1 && arr[right + 1] < max) {
    right++;
  }

  return right - left + 1;
}

function use_sorted_array(arr: number[]): number {
  // this is not optimial -> use sorted array, need nlogn time

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
