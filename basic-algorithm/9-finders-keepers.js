/** Finders Keepers
 *
 * Create a function that looks through an array (first argument)
 * and returns the first element in the array that passes a truth test (second argument).
 * If no element passes the test, return undefined.
 *
 * findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
 * findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
 *
 */

// ============================
// Solution with Destructuring
// ============================

/** Tip

 * When destructuring, it return undefined for non existent property and array elements
 * const one = [];
   one // undefined
 *
 * Similar to:
 * [][0] // undefined
 *
 */
function findElement(arr, func) {
  const [first] = arr.filter(func);
  return first
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// ============================
// Solution with if check
// ============================
function findElement2(arr, func) {
  const arrFilt = arr.filter(func);

  // So we don't have to do a check if using destructuring
  return arrFilt.length > 0 ? arrFilt[0] : undefined;
}
