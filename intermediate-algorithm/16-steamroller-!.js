/** Steamroller
 *
 * Flatten a nested array. You must account for varying levels of nesting.
 *
 */

/** Tips
 * Array.isArray --> checks if something is an array of not
 */

function steamrollArray(arr) {

  // Step 1: create empty array to hold all the flattened element
  let flattenArr = [];

  // Step 3: create recursion function
  function flatten(unflat) {

    // Step 4: loop through the unflat array
    unflat.forEach(elem => {

      // Step 5: if it's not an array, then we push it into the flattenArr container
      //  (this is our base case)
      if(!Array.isArray(elem)) {
        flattenArr.push(elem)
      } else {
        // Step 6: otherwise, we put it through the flatten function
        flatten(elem);
      }
    })
  }

  // Step 2: Kick start the recursion
  flatten(arr);

  // Step 6: return the flattened array
  return flattenArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
