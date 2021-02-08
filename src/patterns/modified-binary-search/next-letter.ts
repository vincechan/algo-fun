/**
 * Given an array of lowercase letters sorted in ascending order,
 * find the smallest letter in the given array greater than a given ‘key’.
 * Assume the given array is a circular list,
 * which means that the last letter is assumed to be connected with the first letter.
 * This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.
 * Write a function to return the next letter of the given ‘key’.
 *
 * @param letters
 * @param key
 */
export function search_next_letter(letters: string[], key: string): string {
  let start = 0,
    end = letters.length - 1,
    mid = 0;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);

    if (letters[mid] === key) {
      return letters[(mid + 1) % letters.length];
    } else if (letters[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // last examined letter (mid) is closest to the key
  // the next letter greatest than key will either be mid or mid + 1
  if (letters[mid] > key) {
    return letters[mid];
  } else {
    return letters[(mid + 1) % letters.length];
  }
}
