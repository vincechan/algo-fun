import { flip_and_invert_image } from "./flip-and-invert-image-matrix";

describe("flip_and_invert_image", () => {
  it("example 1", () => {
    const actual = flip_and_invert_image([
      [1, 0, 1],
      [1, 1, 1],
      [0, 1, 1],
    ]);
    expect(actual).toEqual([
      [0, 1, 0],
      [0, 0, 0],
      [0, 0, 1],
    ]);
  });

  it("example 2", () => {
    const actual = flip_and_invert_image([
      [1, 1, 0, 0],
      [1, 0, 0, 1],
      [0, 1, 1, 1],
      [1, 0, 1, 0],
    ]);
    expect(actual).toEqual([
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 1],
      [1, 0, 1, 0],
    ]);
  });
});
