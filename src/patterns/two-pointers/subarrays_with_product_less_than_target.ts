/**
 * Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.
 *
 * @param arr arr of positive numbers
 * @param target target number
 */
export function find_subarrays(arr: number[], target: number): number[][] {
  const result = [] as number[][];

  for (let left = 0; left < arr.length; left++) {
    let product = arr[left];
    let temp_arr = [arr[left]];

    if (product < target) {
      result.push([...temp_arr]);
    } else {
      break;
    }

    let right = left + 1;
    while (right < arr.length) {
      product = product * arr[right];
      if (product < target) {
        temp_arr.push(arr[right]);
        result.push([...temp_arr]);
        right++;
      } else {
        break;
      }
    }
  }

  return result;
}
