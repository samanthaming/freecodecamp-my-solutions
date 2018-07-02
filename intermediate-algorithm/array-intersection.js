/** Array Unions:
 *
 * between 2 array
 * between unknown # of arrays
 *
 */

// ============================
// Intersection between 2 array
// ============================

/** Using filter with includes
 *
 * It doesn't matter which array you loop over b/c you're looking for the intersection
 * The `includes` is checking for the element exist in the other array
 *
 */
function intersection(arr1, arr2) {
  return arr1.filter(x => arr2.includes(x));
}

/** Using filter with indexOf
 *
 */
function intersection(arr1, arr2) {

  // -1 means nothing is found
  return arr1.filter(x => arr2.indexOf(x) !== -1);

  // you can also do >= instead
  // return arr1.filter(x => arr2.indexOf(x) >= 0);
}

// ============================
// Intersection unknown amount of list
// ============================

function intersection(arr) {
  // Step 1: Combine the array
  //  Concat is great for unknown amount of arrays.
  //  ie. arr1.concat(arr2, arr3, arr4)
  //  Spread might not be suitable b/c unknown amount of array
  const flatten = [].concat(...argurments);

  // Step 2: Using Set to remove the duplicates
  return [...new Set(flatten)];
}
