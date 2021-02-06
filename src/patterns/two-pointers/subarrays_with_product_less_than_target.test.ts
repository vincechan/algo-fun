import { find_subarrays } from "./subarrays_with_product_less_than_target";

describe("find_subarrays", () => {
  it("example 1", () => {
    const actual = find_subarrays([2, 5, 3, 10], 30);
    // expect(actual).toEqual([[2], [5], [2, 5], [3], [5, 3], [10]]);
    expect(actual).toEqual([[2], [2, 5], [5], [5, 3], [3], [10]]);
  });

  it("example 1", () => {
    const actual = find_subarrays([8, 2, 6, 5], 50);
    // expect(actual).toEqual([[8], [2], [8, 2], [6], [2, 6], [5], [6, 5]]);
    expect(actual).toEqual([[8], [8, 2], [2], [2, 6], [6], [6, 5], [5]]);
  });
});
