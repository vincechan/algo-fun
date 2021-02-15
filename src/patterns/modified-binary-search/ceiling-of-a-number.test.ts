import { search_ceiling_of_a_number } from "./ceiling-of-a-number";

describe("search_ceiling_of_a_number", () => {
  it("example 1", () => {
    const actual = search_ceiling_of_a_number([4, 6, 10], 6);
    expect(actual).toEqual(1);
  });

  it("example 2", () => {
    // const actual = search_ceiling_of_a_number([1, 3, 8, 10, 15], 12);
    // expect(actual).toEqual(4);
    const actual = search_ceiling_of_a_number([1, 3, 8, 10, 13, 15], 12);
    expect(actual).toEqual(4);
  });

  it("example 3", () => {
    const actual = search_ceiling_of_a_number([4, 6, 10], 17);
    expect(actual).toEqual(-1);
  });

  it("example 4", () => {
    const actual = search_ceiling_of_a_number([4, 6, 10], -1);
    expect(actual).toEqual(0);
  });
});
