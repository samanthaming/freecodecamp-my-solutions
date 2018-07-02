// ============================
// Print Range using Reduce
// ============================
function printRange(min, max) {

  // Exclusive
  // Array (max - min)

  // Inclusive
  const arr = Array(max - (min - 1)).fill(min);

  return arr.reduce((accum, cur, index) => {
    let prev = accum[index - 1];

    if(!prev) {
      accum.push(cur);
    } else {
      accum.push(prev + 1);
    }
    return accum;
  }, []);
}

printRange(12, 15); // [ 12, 13, 14, 15 ]

// ============================
// Print Range using For loop
// ============================
function printRange(min, max) {
  let arr = [];

  // Exclusive
  // i < max

  // Inclusive
  for(let i = min; i <= max; i++){
    arr.push(i)
  }

  return arr;
}

printRange(12, 15); // [ 12, 13, 14, 15 ]