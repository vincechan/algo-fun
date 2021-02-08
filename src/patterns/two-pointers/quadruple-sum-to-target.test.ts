import { search_quadruplets } from "./quadruple-sum-to-target";

describe("search_quadruplets", () => {
  it("", () => {
    const actual = search_quadruplets([4, 1, 2, -1, 1, -3], 1);
    expect(actual).toEqual([
      [-3, -1, 1, 4],
      [-3, 1, 1, 2],
    ]);
  });

  it("example", () => {
    const actual = search_quadruplets([2, 0, -1, 1, -2, 2], 2);
    expect(actual).toEqual([
      [-2, 0, 2, 2],
      [-1, 0, 1, 2],
    ]);
  });
});
