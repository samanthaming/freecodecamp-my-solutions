/** Convert HTML Entities
 *
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 *
 */

// ============================
// Solution
// ============================
function convertHTML(str) {

  // Step 1: create a hash table of the html entities
  const html = {
    '&': '&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
  };


  return str
    // Step 2: Split the str into individual characters
    .split('')
    // Step 3: We either return the value from the html hash table otherwise return just the character
    //  Why this works:
    //    ie. html['unknown'] --> undefined
    .map(c => html[c] || c)
    // Step 4: Join the character back into a string
    .join('');
}

convertHTML("Dolce & Gabbana");
