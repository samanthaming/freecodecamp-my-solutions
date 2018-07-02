/** Sum All Primes
 *
 * Sum all the prime numbers up to and including the provided number.
 *
 * Prime Number
 *  - greater than 1
 *  - divisible by itself only or 1
 *  ie. [2, 3, 5, 7, 11, 13]
 *
 * sumPrimes(10) should return 17
 *
 */
// ============================
// Solution
// ============================
function sumPrimes(num) {

  // Step 1: create function that checks if value is a prime number
  function isPrime(value) {
    for(let i = 2; i < value; i++) {
      if(value % i === 0) {
        return false;
      }
    }
    return value > 1;
  }

  // Step 2: Create container to contain all prime numbers
  const prime = [];

  // Step 3: Loop through the range of numbers up to and including the provided "num"
  for(let i = 1; i <= num; i ++) {
    if(isPrime(i)) {
      // Step 4: Push prime number into the array
      prime.push(i)
    }
  }

  // Step 5: Add all prime number
  return prime.reduce((accum, cur) => accum + cur, 0);
}

sumPrimes(10);

// ============================
// Check number is prime?
// ============================
/** How it works:
 * Number is 9
 * Loop:
 * 2 --> yes remainder, continue
 * 3 --> no remainder, not prime
 * 4,5,6,7,8 (loop ends)
 *
 * Number is 5
 * Loop:
 * 2 --> yes remainder, continue
 * 3 --> yes remainder, continue
 * 4 --> yes remainder, continue
 * loop ends
 */
function isPrime(value) {

  for(let i = 2; i < value; i++) {

    // It's not a prime if the reminder at any time is 0
    if(value % i === 0) {
      return false;
    }
  }
  return value > 1; // returns a boolean
}
