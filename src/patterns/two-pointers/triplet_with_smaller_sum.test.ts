import { triplet_with_smaller_sum } from "./triplet_with_smaller_sum";

describe("triplet_with_smaller_sum", () => {
  it("example 1", () => {
    const actual = triplet_with_smaller_sum([-1, 0, 2, 3], 3);
    expect(actual).toEqual(2);
  });

  it("example 2", () => {
    const actual = triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5);
    expect(actual).toEqual(4);
  });
});
