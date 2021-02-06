import { dutch_flag_sort } from "./dutch-natiional-flag";

describe("dutch_flag_sort", () => {
  it("example 1", () => {
    const actual = dutch_flag_sort([1, 0, 2, 1, 0]);
    expect(actual).toEqual([0, 0, 1, 1, 2]);
  });

  it("example 2", () => {
    const actual = dutch_flag_sort([2, 2, 0, 1, 2, 0]);
    expect(actual).toEqual([0, 0, 1, 2, 2, 2]);
  });
});
