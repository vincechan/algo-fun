import { search_bitonic_array } from "./search-bitonic-array";

describe("search_bitonic_array", () => {
  it("example 1", () => {
    const actual = search_bitonic_array([1, 3, 8, 4, 3], 4);
    expect(actual).toEqual(3);
  });

  it("example 2", () => {
    const actual = search_bitonic_array([3, 8, 3, 1], 8);
    expect(actual).toEqual(1);
  });

  it("example 3", () => {
    const actual = search_bitonic_array([1, 3, 8, 12], 12);
    expect(actual).toEqual(3);
  });

  it("example 4", () => {
    const actual = search_bitonic_array([10, 9, 8], 10);
    expect(actual).toEqual(0);
  });
});
