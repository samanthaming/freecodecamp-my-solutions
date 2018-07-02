/** Mutations
 *
 * Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
 *
 * mutation(["Mary", "Army"]) should return true
 * mutation(["Mary", "Aarmy"]) should return true
 * mutation(["floor", "for"]) should return true
 * mutation(["voodoo", "no"]) should return false
 *
 */


function mutation(arr) {
  const [raw1, raw2] = arr;
  const first = raw1.toLowerCase();
  const second = raw2.toLowerCase();

  // The order does matter!
  // You want it to compare to all of the letters of the 2nd array
  //  hence, you must loop in 2nd array, and not the 1sts
  return [...second].every(l => first.includes(l));

  // This won't work
  // return [...first].every(l => second.includes(l));
}

mutation(["hello", "hey"]);
