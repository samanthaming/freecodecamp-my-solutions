/** Returning unique
 *
 * About Set:
 *  - Set objects are collections of values.
 *  - A value in the Set may only occur once; it is unique in the Set's collection.
 *
 */
function intersection(arr1, arr2) {

  // Combine the two arrays
  const combined = [...arr1, ...arr2];

  // using the new object type, 'Set', to get rid of the duplicates
  return [...new Set(combined)];
}
