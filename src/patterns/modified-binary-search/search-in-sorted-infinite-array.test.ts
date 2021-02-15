import {
  ArrayReader,
  search_in_infinite_array,
} from "./search-in-sorted-infinite-array";

describe("search_in_infinite_array", () => {
  it("example 1", () => {
    // Input: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], key = 16
    // Output: 6
    // Explanation: The key is present at index '6' in the array.
    const reader = new ArrayReader([
      4,
      6,
      8,
      10,
      12,
      14,
      16,
      18,
      20,
      22,
      24,
      26,
      28,
      30,
    ]);
    const actual = search_in_infinite_array(reader, 16);
    expect(actual).toEqual(6);
  });

  it("example 2", () => {
    // Input: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], key = 11
    // Output: -1
    // Explanation: The key is not present in the array.
    const reader = new ArrayReader([
      4,
      6,
      8,
      10,
      12,
      14,
      16,
      18,
      20,
      22,
      24,
      26,
      28,
      30,
    ]);
    const actual = search_in_infinite_array(reader, 11);
    expect(actual).toEqual(-1);
  });

  it("example 3", () => {
    // Input: [1, 3, 8, 10, 15], key = 15
    // Output: 4
    // Explanation: The key is present at index '4' in the array.
    const reader = new ArrayReader([1, 3, 8, 10, 15]);
    const actual = search_in_infinite_array(reader, 15);
    expect(actual).toEqual(4);
  });

  it("example 4", () => {
    // Input: [1, 3, 8, 10, 15], key = 200
    // Output: -1
    // Explanation: The key is not present in the array.
    const reader = new ArrayReader([1, 3, 8, 10, 15]);
    const actual = search_in_infinite_array(reader, 200);
    expect(actual).toEqual(-1);
  });
});
