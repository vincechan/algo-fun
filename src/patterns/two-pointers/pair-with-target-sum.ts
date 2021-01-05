/**
 * Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
 *
 * @param arr
 * @param target_sum
 */
export const pair_with_targetsum = function (
  arr: number[],
  target_sum: number
): [number, number] {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum == target_sum) {
      return [left, right];
    } else if (current_sum < target_sum) {
      left++;
    } else {
      right--;
    }
  }

  return [-1, -1];
};
