/** Print Ranges
 *
 */

// ============================
//
// ============================
function printRanges(len) {
  return [...Array(len).keys()];

  // [...Array(len).keys()].map(n => n + 1); // [1,2,3,4,5]
}

printRanges(5); [0, 1, 2, 3, 4];

// ============================
//
// ============================
function range(start, end) {
  let arr = [];
  for(let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

range(5, 10); // [ 5, 6, 7, 8, 9, 10 ]
