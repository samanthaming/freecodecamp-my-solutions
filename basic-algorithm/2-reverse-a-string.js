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
  return str
    .split('') // split the string into an array of individual letters
    .reverse() // reverse the order of the array
    .join(''); // convert the array back to a string
}

reverseString("hello");
// returns "olleh"

/* ➡️ Solution: github.com/samanthaming */

// ============================
// Using Reduce
// ============================

function reverseString2(str) {
  return [...str].reduce((accumulator, current) => {
    return current + accumulator;
  });

  // OR One-Liner
  // return [...str].reduce((accumulator, current) => current + accumulator)
}

reverseString2("hello");
// returns "olleh"
