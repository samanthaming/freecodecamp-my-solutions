/** Boo who
 *
 * Check if a value is classified as a boolean primitive. Return true or false.
 * Boolean primitives are true and false.
 *
 * booWho(true) should return true.
 * booWho(NaN) should return false.
 */

// NOTE: this challenge is about checking TYPE not coercion!!!

function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null);

// ============================
// Info on Booleans Coercion
// ============================

/** Converting to Boolean
 *
 * new Boolean(item) // remember, don't use any `new`
 * Boolean(item)
 * !!item
 *
 * http://www.samanthaming.com/tidbits/19-3-ways-to-convert-to-boolean
 *
 * Avoid "new" wrapper: https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch3.md#object-wrapper-gotchas
 *
 */

/** Booleans
 *
 * All of these values will be considered false:
 *
 * undefined
 * null
 * false
 * +0, -0, NaN
 * ""
 *
 * Anything else, it will ge coerced into true
 */
