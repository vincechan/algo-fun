/**
 * Given a set with distinct elements, find all of its distinct subsets.
 *
 * @param nums
 * @returns
 *
 * @example:
 * Input: [1, 3]
 * Output: [], [1], [3], [1,3]
 */
export const find_subsets = function (nums: number[]) {
  const subsets = [] as number[][];

  subsets.push([]);
  for (let i = 0; i < nums.length; i++) {
    const size = subsets.length;
    for (let j = 0; j < size; j++) {
      subsets.push([...subsets[j], nums[i]]);
    }
  }

  return subsets;
};
