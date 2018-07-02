/** Sum All Numbers in a Range
 * 
 * Return the sum of those two numbers plus the sum of all the numbers between them.
 * 
 * sumAll([1, 4]) should return 10
 * sumAll([4, 1]) should return 10
 * 
 */

/** Steps
 * 
 * 1. print ranges
 * 2. add the ranges together
 * 
 */

// Step 1
function printRange(min, max) {
  let arr = [];
  for(let i = min; i <= max; i++){
    arr.push(i)
  }
  return arr;
}

// Step 2
function sumAll(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const range = printRange(min, max);
  return range.reduce((accum, cur) => accum + cur, 0);
}

sumAll([1, 4]);