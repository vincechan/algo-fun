import { backspace_compare } from "./compare-strings-containing-backspaces";

describe("backspace_compare", () => {
  it("example 1", () => {
    // Input: str1="xy#z", str2="xzz#"
    // Output: true
    // Explanation: After applying backspaces the strings become "xz" and "xz" respectively.
    const actual = backspace_compare("xy#z", "xzz#");
    expect(actual).toEqual(true);
  });

  it("example 2", () => {
    // Input: str1="xy#z", str2="xyz#"
    // Output: false
    // Explanation: After applying backspaces the strings become "xz" and "xy" respectively.
    const actual = backspace_compare("xy#x", "xyz#");
    expect(actual).toEqual(false);
  });

  it("example 3", () => {
    // Input: str1="xp#", str2="xyz##"
    // Output: true
    // Explanation: After applying backspaces the strings become "x" and "x" respectively.
    // In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.
    const actual = backspace_compare("xp#", "xyz##");
    expect(actual).toEqual(true);
  });

  it("example 4", () => {
    // Input: str1="xywrrmp", str2="xywrrmu#p"
    // Output: true
    // Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.
    const actual = backspace_compare("xywrrmp", "xywrrmu#p");
    expect(actual).toEqual(true);
  });
});
