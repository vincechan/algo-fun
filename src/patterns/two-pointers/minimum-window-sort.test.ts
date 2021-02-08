import { shortest_window_sort } from "./minimum-window-sort";

describe("shortest_window_sort", () => {
  // Input: [1, 2, 5, 3, 7, 10, 9, 12]
  // Output: 5
  // Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted
  it("example 1", () => {
    const actual = shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]);
    expect(actual).toEqual(5);
  });

  it("example 2", () => {
    // Input: [1, 3, 2, 0, -1, 7, 10]
    // Output: 5
    // Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
    const actual = shortest_window_sort([1, 3, 2, 0, -1, 7, 10]);
    expect(actual).toEqual(5);
  });

  it("example 3", () => {
    // Input: [1, 2, 3]
    // Output: 0
    // Explanation: The array is already sorted
    const actual = shortest_window_sort([1, 2, 3]);
    expect(actual).toEqual(0);
  });

  it("example 4", () => {
    // Input: [3, 2, 1]
    // Output: 3
    // Explanation: The whole array needs to be sorted.
    const actual = shortest_window_sort([3, 2, 1]);
    expect(actual).toEqual(3);
  });
});
