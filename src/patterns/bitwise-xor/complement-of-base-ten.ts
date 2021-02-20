/**
 * Every non-negative integer N has a binary representation, for example,
 * 8 can be represented as “1000” in binary and 7 as “0111” in binary.
 * The complement of a binary representation is the number in binary that we get when we change every 1 to a 0 and every 0 to a 1.
 * For example, the binary complement of “1010” is “0101”.
 * For a given positive number N in base-10, return the complement of its binary representation as a base-10 integer.
 * @param n
 *
 */
export function calculate_bitwise_complement(n: number): number {
  // example: input: 10, output: 5
  // 1. find bits require to store
  //    4 bits require to store 10 -> in base2 the number is 1010
  // 2. determine the number with all require bits set
  //    15 => Math.pow(2, 4) - 1
  // 3. XOR the input with the all bits set to find bitwise complement

  // find number of bit require to store n
  let bit_count = 0;
  let num = n;
  while (num > 0) {
    num = num >> 1;
    bit_count++;
  }

  // find number with all bits set
  const all_bits_set = Math.pow(2, bit_count) - 1;

  // find bitwise complete
  return all_bits_set ^ n;
}
