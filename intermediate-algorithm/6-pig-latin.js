/** Pig Latin
 *
 * Takes the first consonant(s) and move to the end and add "ay"
 * "california" --> aliforniacay
 *
 * If word beings with vowel, add "way" to the end
 * "algorithm" --> algorithmway
 *
 * If no vowel, just add "ay" to the end
 * "h"         --> hay
 */

// ============================
// Solution
// ============================

/** Note
 *
 * substr
 *  - str.substr(-1) --> returns the last letter
 *  - str.substr(0,-1) --> returns ''
 *
 * find
 *  - returns the value of the first element in the array
 */

function translatePigLatin(str) {

  // Step 1: split the string into separate letters
  const arr = str.split('');

  // Step 2: make an arry of your vowels to search against
  const vowel = ['a','i','u','e','o'];

  // Step 3: loop through your string array. Also looping through you vowels array
  //  You want to find the first letter that is a vowel
  const firstVowel = arr.find(s => vowel.find(v => s === v));

  // Step 4: Get the index of the first vowel
  const firstVowelIndex = str.indexOf(firstVowel);

  // Step 5: if no vowel is found or the string begins with a vowel
  //  if no vowel is found (-1) --> append 'ay'
  //  if str starts with a vowel (0) --> append 'way'
  if(firstVowelIndex <= 0) {
    const end = firstVowelIndex === 0 ? 'way' : 'ay';
    return str + end;
  }

  // Step 6: If the vowel is within the string
  //  we want to take that section right before vowel (not include the vowel) and append to end
  //  after that, we append 'ay' to it
  return (
    str.substr(firstVowelIndex)
    + str.substr(0, firstVowelIndex)
    + 'ay'
  );
}

translatePigLatin("hp");
