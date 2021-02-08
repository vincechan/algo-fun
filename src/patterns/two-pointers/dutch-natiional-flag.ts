/**
 * Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.
 * The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.
 *
 * @param arr array containing 0s, 1s, and 2s.
 * @returns the sorted array
 * @example Input: [1, 0, 2, 1, 0]  Output: [0 0 1 1 2]
 */
export function dutch_flag_sort(arr: number[]): number[] {
  let i = 0,
    low = 0,
    high = arr.length - 1;

  // define 2 pointers
  // low  - all elements before low is 0
  // high - all elements after high is 2
  // traverse the array from start to high
  //   swap 0 with low and update low pointer
  //   swap 2 with high and update high pointer

  while (i <= high) {
    if (arr[i] == 0) {
      [arr[low], arr[i]] = [arr[i], arr[low]];
      low++;
      i++;
    } else if (arr[i] == 1) {
      i++;
    } else {
      [arr[high], arr[i]] = [arr[i], arr[high]];
      high--;
      // do not advance i, i maybe 0,1,2
    }
  }

  return arr;
}
