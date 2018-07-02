/** Seek and Destroy
 *
 * Remove all elements from the initial array that are of the same value as these arguments.
 * You have to use `arguments`
 *
 * destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]
 * destroyer([2, 3, 2, 3], 2, 3) should return []
 *
 */

// ============================
// Solution
// ============================

/** Essentially, you're looking for the difference of the 2 arrays
 * (similar to previous exercise)
 *
 * The arguments object is an Array-like object corresponding to the arguments passed to a function.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 *
 */

function destroyer(arr) {

  // Step 1: pull out the values from the arguments
  const [seek, ...destroy] = arguments;

  // Step 2: Using previous exercise's answer, find the difference of the 2 array
  return seek
    .concat(destroy)
    .filter(a => !seek.includes(a) || !destroy.includes(a))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
