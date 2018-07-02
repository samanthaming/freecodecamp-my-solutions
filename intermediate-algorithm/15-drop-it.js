/** Drop it
 *
 * 1 - iterate through and remove each element starting from the first element (the 0 index) until the function func returns true
 * 2 - return the rest of the array once the condition is satisfied
 *
 * dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return []
 * dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2]
 *
 */

function dropElements(arr, func) {

  // Step 1: find the index of when the condition is met
  const index = arr.findIndex(func);

  // Step 2: If no index is not found, return empty array; otherwise the sliced array
  //  we have to do this check because -1 will return an array with the last element
  //   and not an empty array
  return index >= 0 ? arr.slice(index) : []
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;})
