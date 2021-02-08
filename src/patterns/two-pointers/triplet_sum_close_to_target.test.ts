import { triplet_sum_close_to_target } from "./triplet_sum_close_to_target";

describe("triplet_sum_close_to_target", () => {
  it("example 1", () => {
    const actual = triplet_sum_close_to_target([-2, 0, 1, 2], 2);
    expect(actual).toEqual(1);
  });

  it("example 2", () => {
    const actual = triplet_sum_close_to_target([-3, -1, 1, 2], 1);
    expect(actual).toEqual(0);
  });

  it("example 3", () => {
    const actual = triplet_sum_close_to_target([1, 0, 1, 1], 100);
    expect(actual).toEqual(3);
  });
});
