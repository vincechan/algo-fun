import { search_next_letter } from "./next-letter";

describe("next letter", () => {
  it("example 1", () => {
    const actual = search_next_letter(["a", "c", "f", "h"], "f");
    expect(actual).toEqual("h");
  });

  it("example 2", () => {
    const actual = search_next_letter(["a", "c", "f", "h"], "b");
    expect(actual).toEqual("c");
  });

  it("example 3", () => {
    const actual = search_next_letter(["a", "c", "f", "h"], "m");
    expect(actual).toEqual("a");
  });

  it("example 4", () => {
    const actual = search_next_letter(["a", "c", "f", "h"], "h");
    expect(actual).toEqual("a");
  });
});
