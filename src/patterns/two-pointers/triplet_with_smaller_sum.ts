/**
 * Given an array arr of unsorted numbers and a target sum,
 * count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
 * Write a function to return the count of such triplets.
 *
 * @param arr arr of unsorted number
 * @param target target sum
 */
export function triplet_with_smaller_sum(arr: number[], target: number) {
  let count = 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const current_sum = arr[i] + arr[left] + arr[right];
      if (current_sum < target) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }

  return count;
}
