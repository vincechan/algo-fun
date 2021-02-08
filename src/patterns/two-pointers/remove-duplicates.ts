/**
 * Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.
 *
 * @param arr
 */
export const remove_duplicates = function (arr: number[]): number {
  if (arr == null || arr.length === 0) {
    return 0;
  }

  let left = 1; // pointer to next non duplicate element
  let right = 1; // pointer to element being examined
  while (right < arr.length) {
    // if element different than last non-duplicate number, it's not a duplicate.
    // move element and update next pointer
    if (arr[right] != arr[left - 1]) {
      arr[left] = arr[right];
      left++;
    }
    right++;
  }

  return left;
};
