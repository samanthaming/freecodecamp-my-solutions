/** Spinal Tap Case
 *
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 *
 * spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap"
 *
 */

// ============================
// Solution
// ============================
function spinalCase(str) {
  return str
    // Step 1: using regex to
    //  I copy the regex from here
    .split(/\s|_|(?=[A-Z])/)

    // Step 2: loop through each word and convert it to a lower case
    .map(w => w.toLowerCase())

    // Step 3: join the array of separated word back with a '-' into a string
    .join('-');
}

spinalCase('This Is Spinal Tap');

/** Regex
 *
 * I copy the regex from here:
 * https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-spinal-tap-case/16078
 *
 * Split the string at one of the following conditions (converted to an array)
 *  - a whitespace character [\s] is encountered
 *  - underscore character [_] is encountered
 *  - or is followed by an uppercase letter [(?=[A-Z])]
 */
