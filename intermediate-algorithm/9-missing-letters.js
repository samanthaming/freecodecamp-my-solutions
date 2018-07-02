/** Missing Letters
 *
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 *
 * fearNotLetter("abce") // "d"
 *
 */

// ============================
// Solution
// ============================

/** Convert character to ASCII code
 *
 * 'abc'.fromCharCodeAt(0) // 97
 * 'abc'.fromCharCodeAt(1) // 98
 * 'abc'.fromCharCodeAt(2) // 99
 *
 * To conver ascii to character:
 *
 * String.fromCharCode(97) // 'a'
 *
 * Tips:
 * Remember, you can loop through strings
 *
 */

function fearNotLetter(str) {
  // Step 1: get the first letter
  const [first] = str;

  // Step 2: get the last letter
  const last = str[str.length - 1];

  // Step 3: setup placeholder variable
  //  the variable is undefined by default.
  //  which is what we want to return if all letters are within range
  let miss;

  // Step 4: loop over the ascii of the letters ie. 97, 98, 99, 100
  for(let i = first.charCodeAt(0); i < last.charCodeAt(0); i ++) {

    // Step 5: if the letter is not found in the string
    //  -1 means nothing is found
    if(str.indexOf(String.fromCharCode(i)) === -1) {

      // Step 6: set that missing letter as the miss variable
      miss = String.fromCharCode(i)
    }
  }

  // Step 6: return the miss variable
  return miss;
}

fearNotLetter("abce");


