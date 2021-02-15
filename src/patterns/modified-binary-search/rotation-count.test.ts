import { count_rotations } from "./rotation-count";

describe("count_rotations", () => {
  it("example 1", () => {
    const actual = count_rotations([10, 15, 1, 3, 8]);
    expect(actual).toEqual(2);
  });

  it("example 2", () => {
    const actual = count_rotations([4, 5, 7, 9, 10, -1, 2]);
    expect(actual).toEqual(5);
  });

  it("example 3", () => {
    const actual = count_rotations([1, 3, 8, 10]);
    expect(actual).toEqual(0);
  });
});
