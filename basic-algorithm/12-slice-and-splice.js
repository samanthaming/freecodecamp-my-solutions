/** Slice and Splice
 *
 * You are given two arrays and an index.
 * Use the array methods slice and splice to copy each element of the first array into the second array, in order.
 * Return the resulting array.
 * The input arrays should remain the same after the function runs.
 *
 * frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5]
 * frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"]
 *
  frankenSplice(
  ["claw", "tentacle"],
  ["head", "shoulders", "knees", "toes"],
  2
  ); should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
 *
 */

// ============================
// Using Slice and Spread
// ============================
function frankenSplice(arr1, arr2, n) {

  let start = arr2.slice(0, n);
  let end = arr2.slice(n);

  return [...start, ...arr1, ...end];
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// ============================
// Using Splice and Spread
// ============================

 /** Splice
  * var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
  * var removed = myFish.splice(2, 0, 'drum'); // []
  * myFish; // ["angel", "clown", "drum", "mandarin", "sturgeon"]
  */

 function frankenSplice(arr1, arr2, n) {
  let copy2 = [...arr2];
  copy2.splice(n, 0, ...arr1);
  return copy2;
}
