/** DNA Pairing
 *
 * The DNA strand is missing the pairing element.
 * Take each character, get its pair, and return the results as a 2d array.
 *
 * pairElement("GCG");
 * [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
 *
 */

// ============================
// Solution
// ============================

function pairElement(str) {

  // Step 1: Create array of the letters
  const arr = str.split('');

  // Step 2: Create an object of your pairs
  const hash = {
    G: 'C',
    C: 'G',
    A: 'T',
    T: 'A'
  };

  // Step 3: Using reduce, we'll use it to create a 2d array
  return arr.reduce((accum, cur) => {

    // Step 5: Create our array pair, and push to the accumulator array
    accum.push([cur, hash[cur]]);

    // Step 6: Don't forget to return the accumulator
    return accum;
  },
  // Step 4: We'll start with an empty array
  []);
}

pairElement("GCG");
