/** Sorted Union
 *
 * two or more arrays and
 * returns a new array of unique values in the order of the original provided arrays.
 *
 * The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 *
 * uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]
 *
 */

// ============================
// Solution
// ============================

/** We'll be using the Arguments object to solve this:
 * The arguments object is an Array-like object corresponding to the arguments passed to a function.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 */

function uniteUnique(arr) {

  // Step 1: Combine all the arrays using Concat
  //  We're spreading the arguments to it's being passed as an array
  const combined = [].concat(...arguments);

  // Step 2: remove all the duplicates using Set
  return [...new Set(combined)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
