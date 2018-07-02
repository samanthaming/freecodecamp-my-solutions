/** Make a Person
 *
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 *
 */

// ============================
// Solution
// Ans: https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-make-a-person/16020
// ============================
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();


// ============================
// ES6 Class
// Note: this won't pass
// ============================

class PersonClass {
  constructor(firstAndLast) {
    this.fullName = firstAndLast;
  }

  getFirstName() {
    return this.fullName.split(" ")[0];
  };

  getLastName() {
    return this.fullName.split(" ")[1];
  };

  getFullName() {
    return this.fullName;
  };

  setFirstName(name) {
    this.fullName = name + " " + this.fullName.split(" ")[1];
  };

  setLastName(name) {
    this.fullName = this.fullName.split(" ")[0] + " " + name;
  };

  setFullName(name) {
    this.fullName = name;
  };
}
