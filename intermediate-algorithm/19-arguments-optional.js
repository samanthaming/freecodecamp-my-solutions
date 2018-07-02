/** Arguments Optional
 *
 * Create a function that sums two arguments together.
 * If only one argument is provided, then return a function that expects one argument and returns the sum.
 * If either argument isn't a valid number, return undefined.
 *
 * addTogether(2)(3); // 5
 * addTogether(2, '3') // undefined
 * addTogether(2, 3); // 5
 *
 */

// ============================
// Solution
// ============================
function addTogether() {

  // Step 1: Create array of argurments
  const args = [...arguments];

  // Step 2: return undefined if any of the arguments is not a number
  // Make sure all arguments are type of number
  if(args.some(n => typeof n !== 'number')) {
    return undefined;
  }

  // Step 3: if there are more than 2 arguments, get their sum
  // (remember in step 2, we already check that all arguments are of number type)
  if(args.length > 1) {
    return args.reduce((accum, cur) => accum + cur, 0);
  }

  // Step 4: If there is only one argument or 0 argument, return a function
  // Here, we're making use of closures
  return (b) => {
  // return function(b) {

    // Step 5: make sure the argument is of number, return undefined otherwise
    if(typeof b !== 'number') {
      return undefined;
    }

    // Step 6: This will return the function or the execution of that function
    return args[0] + b;
  }
}

addTogether(2)(3);

// ============================
// Convert arguments to array
// ============================

function convert() {

  // a: using 'Array.from'
  const args = Array.from(arguments);

  // b: using Spread
  const args = [...arguments];
}
