import { search_triplets } from "./triple-sum-to-zero";

describe("search_triplets", () => {
  it("example 1", () => {
    const actual = search_triplets([-3, 0, 1, 2, -1, 1, -2]);
    expect(actual).toEqual([
      [-3, 1, 2],
      [-2, 0, 2],
      [-2, 1, 1],
      [-1, 0, 1],
    ]);
  });

  it("example 2", () => {
    const actual = search_triplets([-5, 2, -1, -2, 3]);
    expect(actual).toEqual([
      [-5, 2, 3],
      [-2, -1, 3],
    ]);
  });
});
