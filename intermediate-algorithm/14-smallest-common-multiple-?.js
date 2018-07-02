/** Smallest Common Multiple
 *
 * Answer based on: https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-smallest-common-multiple/16075
 *
 */

function smallestCommons(arr) {

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  // Create array in descending order
  var range = [];
  for (var i = max; i >= min; i--) {
    range.push(i);
  }

  let quot = 0;
  let iterator = 1; // iterator
  let n; // range tracker to get the 3rd element, keeps going until end of range length

  // run code while n is not the same as the array lenght.
  do {
    // first number * second number * iterator
    quot = range[0] * iterator * range[1];

    // n = 2, means the 3rd element
    for (n = 2; n < range.length; n++) {

      // Check if divisible by 3rd number, then 2nd, then 1st, then stops
      if (quot % range[n] !== 0) {
        break;
      }
    }
    iterator++;
  } while (n !== range.length);

  return quot;
}
// ============================
// Smallest Common Multiple between 2 numbers
// ============================
/*
 The multiples of 3:
  - 3, 6, 9, 12, 15, 18, ...

 The multiples of 4:
  - 4, 8, 12, 16, 20, ...

 So "12" is smallest common multiple
 */
function smallestCommonsTwoNum(arr) {

  const [one, two] = arr;
  let i = 2;
  let hash = {};
  let unique;

  while(true) {
    let oneTemp = one * i;
    let twoTemp = two * i;

    hash[oneTemp] = hash[oneTemp] + 1 || 0;
    hash[twoTemp] = hash[twoTemp] + 1 || 0;

    if(hash[oneTemp] === 1 || hash[twoTemp] === 1) {
      unique = hash[oneTemp] === 1 ? oneTemp : twoTemp;
      break
    }
    i++;
  }
  return unique;
}
