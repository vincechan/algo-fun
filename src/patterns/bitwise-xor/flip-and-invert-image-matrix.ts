/**
 * Given a binary matrix representing an image,
 * we want to flip the image horizontally, then invert it.
 *
 * To flip an image horizontally means that each row of the image is reversed.
 * For example, flipping [0, 1, 1] horizontally results in [1, 1, 0].
 * To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
 * For example, inverting [1, 1, 0] results in [0, 0, 1].
 * @param matrix
 */
export function flip_and_invert_image(matrix: number[][]): number[][] {
  // flip the image horizontally row by row
  for (let r = 0; r < matrix.length; r++) {
    let left = 0,
      right = matrix[r].length - 1;
    while (left < right) {
      [matrix[r][left], matrix[r][right]] = [matrix[r][right], matrix[r][left]];
      left++;
      right--;
    }
  }

  // invert the image
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      matrix[r][c] = matrix[r][c] === 1 ? 0 : 1;
    }
  }

  return matrix;
}
