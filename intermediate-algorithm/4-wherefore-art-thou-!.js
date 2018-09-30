/** Wherefore art thou
 *
 * looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
 * Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
 *
 *

 whatIsInAName(
  [
   { first: "Romeo", last: "Montague" },
   { first: "Mercutio", last: null },
   { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }]
 */

// ============================
// Solution
// ============================
function whatIsInAName(collection, source) {

  // Step 1: Convert your object into an array so you can iterate over it
  // [[key,value],[key,value]]
  const sourceArr = Object.entries(source);

  // Step 2: Filter out the obj that doesn't meeting the source
  return collection.filter(obj => {

    // Step 3: Loop through the source array
    //  and only return the object that matches all the source item
    return sourceArr.every(([key, value]) => {
      return obj[key] === value
    })
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
