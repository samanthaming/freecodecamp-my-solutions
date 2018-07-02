/** Factorialize a Number
 *
 * If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 * Only integers greater than or equal to zero will be supplied to the function.
 *
 * factorialize(5) should return 120.
 * factorialize(0) should return 1.
 */


/** Solution
 *
 * Step 1 - Create array of ranges
 * Step 2 - Sum all those ranges together
 *
 */

function factorialize(num) {
  const range = [...Array(num).keys()].map(n => n + 1);
  return range.reduce((accum, cur) => accum * cur, 1);
}

factorialize(5);
