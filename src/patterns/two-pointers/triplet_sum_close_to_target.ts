/**
 * Given an array of unsorted numbers and a target number,
 * find a triplet in the array whose sum is as close to the target number as possible,
 * return the sum of the triplet. If there are more than one such triplet,
 * return the sum of the triplet with the smallest sum.
 *
 * @param arr array of unsorted number
 * @param target target number
 */
export function triplet_sum_close_to_target(
  arr: number[],
  target: number
): number {
  let min_diff = Number.MAX_VALUE;

  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const current_sum = arr[i] + arr[left] + arr[right];
      if (current_sum === target) {
        return current_sum;
      }

      min_diff = Math.min(Math.abs(min_diff), Math.abs(target - current_sum));
      if (current_sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return target - min_diff;
}
