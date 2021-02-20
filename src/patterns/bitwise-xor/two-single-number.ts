/**
 * In a non-empty array of numbers,
 * every number appears exactly twice except two numbers that appear only once.
 * Find the two numbers that appear only once.
 *
 * @param nums
 */
export function find_single_numbers(nums: number[]): number[] {
  return use_set(nums);

  // TODO: use xor
}

function use_set(nums: number[]): number[] {
  var set = new Set<number>();
  nums.forEach((x) => {
    if (set.has(x)) {
      set.delete(x);
    } else {
      set.add(x);
    }
  });
  return Array.from(set);
}
