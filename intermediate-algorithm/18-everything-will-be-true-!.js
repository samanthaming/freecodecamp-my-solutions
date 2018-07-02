/** Everything Be True
 *
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument)
 * truthCheck([{"single": "double"}, {"single": 'hi'}], "single") // true
 * truthCheck([{"single": "double"}, {"single": NaN}], "single") // false
 * truthCheck([{"single": "double"}, {"single": undefined}], "single") // false
 */

// ============================
// Solution
// ============================

function truthCheck(collection, pre) {

  // Step 1: we can just use every to make sure the value is true
  return collection.every(c => c[pre]);
}

truthCheck([{"single": "double"}, {"single": 'hi'}], "single")
