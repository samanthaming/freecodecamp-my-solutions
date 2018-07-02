/** Sum All Odd Fibonacci Numbers
 *
 * return the sum of all odd Fibonacci numbers that are less than or equal to num
 *
 * sumFibs(4) should return 5.
 *
 */

// ============================
// Solution
// ============================

/** Using 2 steps
 *
 * 1 - Create fibonacci array (see fibonacci section for ways of doing this)
 * 2 - Using reduce to sum up the odd numbers
 *
 */
function sumFibs(num) {

  // Step 1: We create our starting fibonacci array
  const result = [0,1];

  // Step 2: We start our loop (see our regular fibonacci solution below)
  while(result.length <= num) {

    // Step 3: Get our last element in the fibonacci array
    const last = result[result.length - 1];

    // Step 4: Get our second last element
    const prevLast = result[result.length - 2];

    // Step 6: Break out of the loop if the sum is over our num (argument)
    if((last + prevLast) > num) {
      break;
    }

    // Step 5: Add the last 2 numbers, and push into our fibonacci array
    result.push(last + prevLast);
  }

  // Step 6: We add all our odd numbers in the fibonacci array
  return result.reduce((accum, cur) => {
    if(cur % 2 !== 0) {
      return accum + cur;
    }
    // Don't forget to return our accumulator
    return accum;
  }, 0);
}

sumFibs(1000); // 1785

/** Using while
 *
 * https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-sum-all-odd-fibonacci-numbers/16084
 *
 */
function sumFibs(num) {
  let prev = 0;
  let last = 1;
  let sum = 0;

  while (last <= num) {
    if (last % 2 !== 0) {
      sum += last;
    }
    last += prev;
    prev = last - prev;
  }

  return sum;
}

sumFibs(4);
// ============================
// Fibonacci
// ============================

/** Fibonacci using while loope
 *
 * [0,1,1,2,3,4,8]
 *
 */
function fibWhile(num) {
  const result = [0,1];

  while(result.length <= num) {
    const last = result[result.length - 1];
    const prevLast = result[result.length - 2];

    result.push(last + prevLast);
  }

  return result[result.length - 1];
}

/** Fibonacci using for loop
 * Answer from https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/
 *
 */
function fibFor(num) {

  // You know the first two will alway be 0 and 1
  //  so we can create the array as so
  const result = [0, 1];

  for(let i = 2; i <= num; i++) {
    // Get the previous
    //  or result[result.length - 1]
    const prev = result[i - 1];

    // Get the previous previous
    const prevPrev = result[i - 2];

    // Push the sum of the 2 previous into result
    result.push(prev + prevPrev);
  }

  // Since the last element will be the sum, just return that
  return result[num];
}

/** Fibonacci using recursion
 * Answer from https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/
 */
function fibRec(n) {

  // When n is equal to 0 or 1
  // This is our base case
  //   fib(0) --> 0
  //   fib(1) --> 1
  if(n < 2) {
    return n;
  }

  return fibRec(n - 1) + fibRec(n - 2);
}
