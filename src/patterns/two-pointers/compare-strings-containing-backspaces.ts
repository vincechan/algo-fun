/**
 * Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.
 *
 * @param str1 first string
 * @param str2 second string
 * @returns true if two strings are equal after applying backspaces, otherwise false
 */
export function backspace_compare(str1: string, str2: string): boolean {
  return remove_backspaces(str1) === remove_backspaces(str2);
  //return remove_backspaces_with_two_pointers(str1) === remove_backspaces_with_two_pointers(str2);
}

function remove_backspaces(input: string): string {
  const stack = [] as string[];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "#") {
      // only pop if there are char
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(input[i]);
    }
  }
  return stack.join("");
}

function remove_backspaces_with_two_pointers(input: string): string {
  const arr = Array.from(input);

  let left = 0,
    right = 0;
  while (right < arr.length) {
    if (arr[right] === "#") {
      if (left > 0) {
        left--;
      }
    } else {
      // swap
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
    }
    right++;
  }
  return arr.slice(0, left).join("");
}
