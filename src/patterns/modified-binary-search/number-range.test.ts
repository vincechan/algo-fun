import { find_range } from "./number-range";

describe("find_range", () => {
  it("example 1", () => {
    const actual = find_range([4, 6, 6, 6, 9], 6);
    expect(actual).toEqual([1, 3]);
  });

  it("example 2", () => {
    const actual = find_range([1, 3, 8, 10, 15], 10);
    expect(actual).toEqual([3, 3]);
  });

  it("example 3", () => {
    const actual = find_range([1, 3, 8, 10.15], 12);
    expect(actual).toEqual([-1, -1]);
  });
});
