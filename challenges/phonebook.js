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


// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  const phonebook = {};
  for (let index in jazbook) {
    if (jazbook[index][0].match(/^[0-9]$/)) {
      phonebook[jazbook[index][1]] = jazbook[index][0]; 
    } else {
      phonebook[[index][0]] = jazbook[index][1];
    }
  }
  return phonebook;
};

//  return the number associated with the name in the jazbook
function findName(jazbook, name){
  for (let i = 0; i < jazbook.length; i += 1) {
    if (name === jazbook[i][0]) return jazbook[i][1];
  }
  return false;
};

makePhoneBookObject.prototype.add = (jazbook, name, number) => {
  const entry = [];
  entry.push(name, number);
  jazbook.push(entry);
  return jazbook;
}

makePhoneBookObject.prototype.delete = (jazbook, name) => {
  for (let i = 0; i < jazbook.length; i += 1) {
    if (name === jazbook[i][0]) delete jazbook[i]
  }
  return jazbook;
};

makePhoneBookObject.prototype.sortBook = (jazbook) => {
  const sorted = [];
  for (let i = 0; i < jazbook.length; i += 1) {
    sorted.push(jazbook[i][0]);
  }
  sorted.sort();
  jazbook = sorted;
  return jazbook;
}


const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
