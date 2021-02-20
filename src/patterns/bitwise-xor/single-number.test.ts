import { find_single_number } from "./single-number";

describe("find_single_number", () => {
  it("example 1", () => {
    const actual = find_single_number([1, 4, 2, 1, 3, 2, 3]);
    expect(actual).toEqual(4);
  });

  it("example 2", () => {
    const actual = find_single_number([7, 9, 7]);
    expect(actual).toEqual(9);
  });
});
