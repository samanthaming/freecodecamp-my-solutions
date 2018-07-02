/** Find the Longest Word in a String
 *
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
 *
 * findLongestWordLength("May the force be with you") should return 5.
 * findLongestWordLength("Google do a barrel roll") should return 6.
 */

/** Solution
 *
 * Step 1 - Create array of the length of each word
 * Step 2 - Return the max within that array
 *
 */

function findLongestWordLength(str) {
  const arrLength = str.split(' ').map(s => s.length);
  return Math.max(...arrLength);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
