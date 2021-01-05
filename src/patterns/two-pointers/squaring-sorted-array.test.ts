import { make_squares } from "./squaring-sorted-array";

describe("make_squares", () => {
  it("should square sorted array - example 1", () => {
    const actual = make_squares([-2, -1, 0, 2, 3]);
    expect(actual).toEqual([0, 1, 4, 4, 9]);
  });

  it("should square sorted array - example 2", () => {
    const actual = make_squares([-3, -1, 0, 1, 2]);
    expect(actual).toEqual([0, 1, 1, 4, 9]);
  });
});
