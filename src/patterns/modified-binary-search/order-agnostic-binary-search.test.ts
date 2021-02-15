import { binary_search } from "./order-agnostic-binary-search";

describe("binary_search", () => {
  it("example 1", () => {
    const actual = binary_search([4, 6, 10], 10);
    expect(actual).toEqual(2);
  });

  it("example 2", () => {
    const actual = binary_search([1, 2, 3, 4, 5, 6, 7], 5);
    expect(actual).toEqual(4);
  });

  it("example 3", () => {
    const actual = binary_search([10, 6, 4], 10);
    expect(actual).toEqual(0);
  });

  it("example 4", () => {
    const actual = binary_search([10, 6, 4], 4);
    expect(actual).toEqual(2);
  });
});
