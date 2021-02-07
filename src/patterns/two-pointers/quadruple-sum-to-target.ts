/**
 * Given an array of unsorted numbers and a target number,
 * find all unique quadruplets in it, whose sum is equal to the target number.
 *
 * @param arr array of unsorted numbers
 * @param target target number
 */
export function search_quadruplets(arr: number[], target: number): number[][] {
  const result = [] as number[][];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue; // skip same element
    }

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[j - 1]) {
        continue;
      }

      let left = j + 1,
        right = arr.length - 1;
      while (left < right) {
        const current_sum = arr[left] + arr[right] + arr[i] + arr[j];
        if (current_sum === target) {
          result.push([arr[i], arr[j], arr[left], arr[right]]);
          left++;
          right--;
          // skip same element to avoid duplidate
          while (left < right && arr[left] === arr[left - 1]) {
            left++;
          }
          // skip same element to avoid duplicate
          while (left < right && arr[right] == arr[right + 1]) {
            right--;
          }
        } else if (current_sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}
