/** Binary Agents
 *
 * Return an English translated sentence of the passed binary str
 *
 */

// ============================
// Solution
// ============================

/** Convert a binary into a letter
 *
 * String.fromCharCode(parseInt('01000001', 2)); // 'A'
 *
 */

function binaryAgent(str) {

  return str
    // Step 1: split the binary into an array of individual binary item
    .split(' ')
    // Step 2: we convert the binary element into letters
    .map(b => String.fromCharCode(parseInt(b, 2)))
    // Step 3: convert the array into a string
    .join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
