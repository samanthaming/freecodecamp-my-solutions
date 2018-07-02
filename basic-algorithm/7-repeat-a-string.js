/** Repeat a String Repeat a String
 *
 * Repeat a given string str (first argument) for num times (second argument).
 * Return an empty string if num is not a positive number.
 *
 * repeatStringNumTimes("*", 3) should return "***"
 * repeatStringNumTimes("abc", -2) should return ""
 * repeatStringNumTimes("abc", 3) should return "abcabcabc"
 *
 */


// ============================
// Using `fill`
// ============================

/** Solution
 *
 * Tip: Array(3).fill(4); // [4, 4, 4]
 *
 */

function repeatStringNumTimes(str, num) {
  if (num < 0) return "";
  return Array(num).fill(str).join('');
}

repeatStringNumTimes("abc", 3);

// ============================
// Using `repeat`
// ============================

// 'abc'.repeat(-1); // RangeError
// 'abc'.repeat(0);  // ''
// 'abc'.repeat(1);  // 'abc'

function repeatStringNumTimes2(str, num) {
  if (num < 0) return "";
  return str.repeat(3);
}

repeatStringNumTimes2("abc", 3);
