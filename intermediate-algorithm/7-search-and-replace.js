/** Search and Replace
 *
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 *
 * Preserve the case of the first character in the original word when you are replacing it
 *
 * myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch"
 *
 */

// ============================
// Solution
// ============================
function myReplace(str, before, after) {

  // Step 1: Create array of the words
  const arr = str.split(' ');

  // Step 2: Create new array with the replaced word
  return arr.map(w => {

    // Step 3: If we find the matched word
    if(w === before) {

      // Step 5: If the search word is capitalize, we want to capitalize the replace word
      if(w.charAt(0) === w.charAt(0).toUpperCase()) {
        return after.charAt(0).toUpperCase() + after.slice(1);
      }

      // Step 4: Then we return the replaced word
      return after;
    }

    // Step 6: If no match, just return the original word
    return w;
  })
  // Step 7: Join the array back into a string
  .join(' ');
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");


// ============================
// Solution 2 - manipulating the string
// ============================

function myReplace2(str, before, after) {

  // Step 1: Find the index of the searched word
  //  This will return the first character of the matched word
  const index = str.indexOf(before);

  // Step 2: Check if searched word is capitalize
  if(str[index] === str[index].toUpperCase()) {

    // Step 3: Capitalize the first character of the replace word
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }

  // Step 4: using replace method, to replace the searched word with the new word
  return str.replace(before, after);
}
