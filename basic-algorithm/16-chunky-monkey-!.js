/** Chunky Monkey
 *
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 *
 * chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]
 *
 */

// ============================
// Using Reduce (a better way)
// ============================

function chunkArrayInGroups(arr, size) {

  return arr.reduce((accum, cur) => {
    let chunk = accum[accum.length - 1];

    // We want to create new chunk if size is met OR is the first iteration
    if(!chunk || chunk.length === size) {
      accum.push([cur]);
    } else {
      chunk.push(cur);
    }
    return accum;
  }, []);
}

// ============================
// Using Reduce with index check
// ============================

// [][2]; undefined
// undefined.length // Error
// That's why you need to check since the first iteration would be an empty array []

function chunkArrayInGroups(arr, size) {

  return arr.reduce((accum, cur, index) => {
    if(index === 0) {
      accum.push([]);
    }

    let chunk = accum[accum.length - 1];

    //
    if (chunk.length < size) {
      chunk.push(cur);
    } else {
      accum.push([cur]);
    }
    return accum;
  }, []);
}
