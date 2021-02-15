import { find_max_in_bitonic_array } from "./bitonic-array-maximum";

describe("find_max_in_bitonic_array", () => {
  it("example 1", () => {
    const actual = find_max_in_bitonic_array([1, 3, 8, 12, 4, 2]);
    expect(actual).toEqual(12);
  });

  it("example 2", () => {
    const actual = find_max_in_bitonic_array([3, 8, 3, 1]);
    expect(actual).toEqual(8);
  });

  it("example 3", () => {
    const actual = find_max_in_bitonic_array([1, 3, 8, 12]);
    expect(actual).toEqual(12);
  });

  it("example 4", () => {
    const actual = find_max_in_bitonic_array([10, 9, 8]);
    expect(actual).toEqual(10);
  });
});
