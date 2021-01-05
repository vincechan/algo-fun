import { remove_duplicates } from "./remove-duplicates";

describe("remove_duplicates", () => {
  it("removes duplicates - example 1", () => {
    const actual = remove_duplicates([2, 3, 3, 3, 6, 9, 9]);
    expect(actual).toEqual(4);
  });

  it("removes duplicates - example 2", () => {
    const actual = remove_duplicates([2, 2, 2, 11]);
    expect(actual).toEqual(2);
  });
});
