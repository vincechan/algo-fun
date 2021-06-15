import { find_subsets } from "./subsets";

describe("subsets", () => {
  test("example 1", () => {
    const actual = find_subsets([1, 3]);
    expect(actual).toEqual([[], [1], [3], [1, 3]]);
  });

  test("example 2", () => {
    const actual = find_subsets([1, 5, 3]);
    expect(actual).toEqual([
      [],
      [1],
      [5],
      [1, 5],
      [3],
      [1, 3],
      [5, 3],
      [1, 5, 3],
    ]);
  });
});
