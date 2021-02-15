import { search_rotated_array } from "./search-rotated-array";

describe("search_rotated_array", () => {
  it("example 1", () => {
    const actual = search_rotated_array([10, 15, 1, 3, 8], 15);
    expect(actual).toEqual(1);
  });

  it("example 2", () => {
    const actual = search_rotated_array([4, 5, 6, 9, 10, -1, -2], 10);
    expect(actual).toEqual(4);
  });
});
