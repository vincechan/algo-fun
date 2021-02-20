import { calculate_bitwise_complement } from "./complement-of-base-ten";

describe("calculate_bitwise_complete", () => {
  it("example 1", () => {
    const actual = calculate_bitwise_complement(8);
    expect(actual).toEqual(7);
  });

  it("example 2", () => {
    const actual = calculate_bitwise_complement(10);
    expect(actual).toEqual(5);
  });
});
