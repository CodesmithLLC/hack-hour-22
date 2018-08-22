
// Check For Start of Cycle
// Bad: Doesn't work if the cycle isn't a perfect circle

function hasCycle(linkedlist) {
  if (linkedlist) {
    return findCycle(linkedlist, linkedlist);
  }
  return false;
}

function findCycle(start, curr) {
  if (curr.next === start) {
    return true;
  }
  if (!curr.next) {
    if (start.next) {
      return findCycle(start.next, start.next);
    }
    return false;
  }
  return findCycle(start, curr.next);
}


// Push Seen Nodes into Array
//Bad: inefficient

function hasCycle(linkedlist) {
  if (linkedlist) {
    var curr = linkedlist;
    var nodes = [];
    while (curr) {
      for (var i = 0; i < nodes.length; i++) {
        if (curr === nodes[i]) {
          return true;
        }
      }
      nodes.push(curr);
      curr = curr.next;
    }
  }
  return false;
}


// Add Nodes to HashSet
// Bad: JavaScript forces keys into strings and nodes look like '[object Object]'
// Possible Fix: override toString method, make HashSet/good hash function

function hasCycle(linkedlist) {
  if (linkedlist) {
    var curr = linkedlist;
    var nodes = {};
    while (curr) {
      if (curr in nodes) {
        return true;
      }
      nodes[curr] = true;
      curr = curr.next;
    }
  }
  return false;
}


// Add "visited" Property
// Bad: taint the objects
// Possible Fix: delete the properties you added

function hasCycle(linkedlist) {
  if (linkedlist) {
     var curr = linkedlist;
     while (curr) {
       if (curr.visited) {
        return true;
       }
       curr.visited = true;
       curr = curr.next;
     }
  }
  return false;
}


// "Tortoise & Hare"
function hasCycle(linkedList) {
  if (linkedList && linkedList.next) {
    return findCycle(linkedList, linkedList.next);
  }
  return false;
}

function findCycle(tortoise, hare) {
  if (tortoise === hare) {
    return true;
  }
  return hare !== null && hare.next !== null && findCycle(tortoise.next, hare.next.next);
}
