/**
 * Given an array of numbers which is sorted in ascending order and is rotated ‘k’ times around a pivot, find ‘k’.
 * You can assume that the array does not have any duplicates.
 *
 * @param arr sorted array in asc and is rotated 'k' times around a pivot.
 * @returns the number of times rotated
 */
export function count_rotations(arr: number[]): number {
  // Insight: number of times rotated -> number of times minimum element moves to the right
  // example: input [10, 15, 1, 3, 8] output 2 -> 1 is moved to the right 2 times
  // we need to find the minimum element

  let min_index = 0,
    start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (mid < arr.length - 1 && arr[mid] > arr[mid + 1]) {
      // mid + 1 is smallest
      min_index = mid + 1;
      break;
    } else if (mid > 0 && arr[mid] < arr[mid - 1]) {
      // mid is smallest
      min_index = mid;
      break;
    } else if (arr[start] < arr[mid]) {
      // left is sorted, pivot is on the right
      start = mid + 1;
    } else {
      // right is sorted, mid is on the left
      end = mid - 1;
    }
  }
  return min_index;
}
