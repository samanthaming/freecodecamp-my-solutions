// ============================
// Difference between 2 array
// ============================

function diffArray(arr1, arr2) {

  // Step 1. Combine the two arrays
  const combined = arr1.concat(arr2);

  // Step 2. Filter out the elements that doesn't exist in array 1 or array 2
  // (in other words, if the element exists in both the arrays, remove it)
  return combined
    .filter(a => !arr1.includes(a) || !arr2.includes(a));
}

diffArray([1, 2, 3, 100, 5], [1, 2, 3, 4, 5]);


/* You can also combine it in one statement

return arr1
  .concat(arr2)
  .filter(a => !arr1.includes(a) || !arr2.includes(a));
*/
