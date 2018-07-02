/** Reverse a String
 *
 * Your result must be a string.
 *
 * reverseString("hello") should become "olleh"
 * reverseString("Howdy") should become "ydwoH"
 */

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");
