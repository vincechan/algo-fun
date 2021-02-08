import { pair_with_targetsum } from "./pair-with-target-sum";

describe("pair_with_targetsum", () => {
  it("finds pair - example 1", () => {
    const actual = pair_with_targetsum([1, 2, 3, 4, 6], 6);
    expect(actual).toEqual([1, 3]);
  });

  it("finds pair - example 2", () => {
    const actual = pair_with_targetsum([2, 5, 9, 11], 11);
    expect(actual).toEqual([0, 2]);
  });

  it("should return [-1,-1] when input array has 0 elements", () => {
    const actual = pair_with_targetsum([], 2);
    expect(actual).toEqual([-1, -1]);
  });

  it("should return [-1,-1] when input array has 1 element", () => {
    const actual = pair_with_targetsum([1], 2);
    expect(actual).toEqual([-1, -1]);
  });

  it("should return [-1,-1] when input array has no pair with target sum", () => {
    const actual = pair_with_targetsum([10, 20, 30], 5);
    expect(actual).toEqual([-1, -1]);
  });
});
