/** Reverse a String
 *
 * Reverse the provided string.
 * Your result must be a string.
 *
 * reverseString("hello")
 * Output: "olleh"
 *
 * reverseString("HoWdy")
 * Output: "ydWoH"
 *
 */

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");
// returns "olleh"
