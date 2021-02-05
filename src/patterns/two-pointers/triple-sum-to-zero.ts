/**
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
 * @param arr array of number
 */
export function search_triplets(arr: number[]): number[][] | null {
  const triplets = [] as number[][];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    // skip element to avoid duplicate
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    // need to find this sum from two other number
    const sum = 0 - arr[i];

    // search two numbers that will add up to sum
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] + arr[right] == sum) {
        triplets.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
        // skip element to avoid duplicate
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }
        // skip element to avoid duplicate
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (arr[left] + arr[right] < sum) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
}
