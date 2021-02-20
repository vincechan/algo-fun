import { find_single_numbers } from "./two-single-number";

describe("find_single_numbers", () => {
  it("example 1", () => {
    const actual = find_single_numbers([1, 4, 2, 1, 3, 5, 6, 2, 3, 5]);
    expect(actual).toEqual([4, 6]);
  });

  it("example2 ", () => {
    const actual = find_single_numbers([2, 1, 3, 2]);
    expect(actual).toEqual([1, 3]);
  });
});
