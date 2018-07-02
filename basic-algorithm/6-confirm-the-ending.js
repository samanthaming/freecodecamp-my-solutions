/** Confirm the Ending
 *
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 * This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
 * But we would like you to use one of the JavaScript `substring` methods instead.
 *
 * confirmEnding("Connor", "n") should return false.
 * confirmEnding("Open sesame", "pen") should return false.
 *
 */


/** substring()
 *
 * The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
 *
 * str.substring(indexStart[, indexEnd])
 *
 * Returns: A new string containing the specified part of the given string.
 *
 * 'Mozilla'.substring(0, 1); // 'M'
 * 'Mozilla'.substring(1, 0); // 'M'
 */

// ============================
// Using `substring`
// ============================



// ============================
// Using `slice`
// ============================

/** Solution
 *
 * Tip: 'Happy'.slice(-3) // "ppy"
 *
 * 1- Using the target's length to find the end of the str
 * 2- And then return the comparison the str end to target
 *
 */

function confirmEnding(str, target) {
  const len = target.length;
  const end = str.slice(-len);
  return target === end;
}

confirmEnding("Bastian", "n");

// ============================
// Using `endsWith`
// ============================
function confirmEnding2(str, target) {
  return str.endsWith(target);
}

confirmEnding2("Bastian", "n");
