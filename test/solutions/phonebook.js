function findName(jazbook, name) {
  if (!jazbook.length) return false;

  jazbook = jazbook.sort((a, b) => a[0] - b[0]);

  const length = jazbook.length - 1;
  var pointer = Math.floor(jazbook.length / 2);
  var number;

  while (number === undefined) {
    if (jazbook[pointer][0] === name) {
      number = jazbook[pointer][1];
    } else if (pointer === 1) {
      if (jazbook[pointer - 1][0] === name) {
        number = jazbook[pointer - 1][1];
      } else {
        number = false;
      }
    } else if (pointer === length - 1) {
      if (jazbook[pointer + 1][0] === name) {
        number = jazbook[pointer + 1][1];
      } else {
        number = false;
      }
    } else if (name > jazbook[pointer][0]) {
      pointer = Math.floor(pointer + (length - pointer) / 2);
    } else {
      pointer = Math.ceil(pointer - pointer / 2);
    }
  }

  return number;
}

// recursion
function findName(jazbook, name) {
  var length = jazbook.length - 1;
  var pointer = Math.floor(jazbook.length / 2);
  var newArray;

  if (jazbook[pointer][0] === name) {
    return jazbook[length][1];
  } else if (name > jazbook[pointer][0]) {
    newArray = jazbook.slice(pointer + 1, length + 1);
    return findName(newArray, name);
  } else {
    newArray = jazbook.slice(0, pointer);
    return findName(newArray, name);
  }
}

// extension function
function makePhoneBookObject(jazbook) {
  var phonebook = {};
  jazbook.forEach(individual => {
    phonebook[individual[0]] = individual[1];
  });
  return phonebook;
}
