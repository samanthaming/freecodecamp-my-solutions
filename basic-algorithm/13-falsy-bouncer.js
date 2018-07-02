/** Falsy Bouncer
 *
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are:
 * false, null, 0, "", undefined, and NaN
 *
 * bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9]
 */


// ============================
// Using !!
// ============================
function bouncer(arr) {

  return arr.filter(a => !!a);
}

bouncer([7, "ate", "", false, 9]);

// ============================
// Using Boolean
// ============================

function bouncer2(arr) {

  return arr.filter(a => Boolean(a));
}

bouncer2([7, "ate", "", false, 9]);
