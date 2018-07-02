/** Where do I Belong
 *
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
 * The returned value should be a number.
 *
 * getIndexToIns([10, 20, 30, 40, 50], 35) should return 3
 * getIndexToIns([40, 60], 50) should return 1
 * getIndexToIns([], 1) should return 0
 *
 */


function getIndexToIns(arr, num) {

  // Push your number to array
  arr.push(num);

  // Now sort the array
  let sorted = arr.sort((a, b) => a - b);

  // And then return the index of your num within the array
  return sorted.indexOf(num);
}
