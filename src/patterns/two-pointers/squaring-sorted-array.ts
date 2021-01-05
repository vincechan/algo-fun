/**
 * Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
 * @param arr
 *
 * @example
 *   Input: [-2, -1, 0, 2, 3]
 *   Output: [0, 1, 4, 4, 9]
 */
export const make_squares = function (arr: number[]): number[] {
  const squares = [] as number[];
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const leftsq = arr[left] * arr[left];
    const rightsq = arr[right] * arr[right];
    if (rightsq >= leftsq) {
      squares.unshift(rightsq);
      right--;
    } else {
      squares.unshift(leftsq);
      left++;
    }
  }

  return squares;
};
