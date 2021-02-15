export class ArrayReader {
  arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  get(index: number) {
    if (index >= this.arr.length) return Number.MAX_SAFE_INTEGER;
    return this.arr[index];
  }
}

/**
 * Given an infinite sorted array (or an array with unknown size), find if a given number ‘key’ is present in the array.
 * Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.
 *
 * Since it is not possible to define an array with infinite (unknown) size,
 * you will be provided with an interface ArrayReader to read elements of the array.
 * ArrayReader.get(index) will return the number at index; if the array’s size is smaller than the index,
 * it will return Integer.MAX_VALUE.
 *
 * @param reader ArrayReader
 * @param key
 */
export function search_in_infinite_array(
  reader: ArrayReader,
  key: number
): number {
  // find upperbound
  let upper = 1;
  while (true) {
    if (reader.get(upper) === Number.MAX_SAFE_INTEGER) {
      break;
    }
    upper *= 2;
  }

  // perform binary search
  let start = 0,
    end = upper,
    mid = 0;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (reader.get(mid) === key) {
      return mid;
    } else if (key < reader.get(mid)) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}
