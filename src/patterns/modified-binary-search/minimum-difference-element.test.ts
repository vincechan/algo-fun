import { search_min_diff_element } from "./minimum-difference-element";

describe("search_min_diff_element", () => {
  it("example 1", () => {
    const actual = search_min_diff_element([4, 6, 10], 7);
    expect(actual).toEqual(6);
  });

  it("example 2", () => {
    const actual = search_min_diff_element([4, 6, 10], 4);
    expect(actual).toEqual(4);
  });

  it("example 3", () => {
    const actual = search_min_diff_element([1, 3, 8, 10, 15], 12);
    expect(actual).toEqual(10);
  });

  it("example 4", () => {
    const actual = search_min_diff_element([4, 6, 10], 17);
    expect(actual).toEqual(10);
  });
});
