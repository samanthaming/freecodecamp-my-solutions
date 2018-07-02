/** Title Case a Sentence
 *
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 *
 * titleCase("sHoRt AnD sToUt") should return Short And Stout
 * titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout
 */

function titleCase(str) {
  let arr = str.split(' ');

  return arr.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

titleCase("I'm a little tea pot");
