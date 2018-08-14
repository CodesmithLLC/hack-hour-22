/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  let result;
  jazbook.forEach((entry, i) => {
    if (entry[0] === name) result = entry[1];
  })
  return result || false;
}

const jbook = [['alex','301-844-3421'], ['jae','301-844-1211'], ['david','301-844-0978'], ['travis','301-844-8505'], ['jasmine','1800-974-4539'],]

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  this.properJazbook = {}
  jazbook.forEach(entry => {
    this.properJazbook[entry[0]] = entry[1]; 
  })
}

makePhoneBookObject.prototype = {
  addEntry: function(person, num) {
    this.properJazbook[person] = num;
  },

  lookupEntry: function(name) {
    for(const person in this.properJazbook) {
      if(person === name) return this.properJazbook[person]
    }
  },
    
  deleteEntry: function(name) {
    for(const person in this.properJazbook) {
      if(person === name) {
        delete this.properJazbook[person];
      }
    }
  }
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
