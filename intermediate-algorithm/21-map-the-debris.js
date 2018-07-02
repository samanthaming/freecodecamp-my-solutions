/** Map the Debris
 *
 * Return a new array that transforms the elements' average altitude into their orbital periods (in seconds)
 *
 * return [ { name: 'iss', orbitalPeriod: 5557 },
  { name: 'hubble', orbitalPeriod: 5734 },
  { name: 'moon', orbitalPeriod: 2377399 } ]
 */

function orbitalPeriod(arr) {

  // Step 1: store the constants
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  // Step 2: create a function that calculates the orbitalPeriod
  function orbital(avgAlt) {
    return Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avgAlt, 3) / GM));
  }

  // Step 3: Using reduce to create a new array of objects
  return arr.reduce((accum, cur) => {

    // Step 4: Create our object and push to our accumulator array
    accum.push({
      name: cur.name,
      orbitalPeriod: orbital(cur.avgAlt)
    })

    // Step 5: don't forget to return accumulator
    return accum;
  }, []);
}
