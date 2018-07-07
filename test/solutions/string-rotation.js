// helper function
function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

// rearrange s2
function stringRotation(s1, s2) {
  var head = s2.indexOf(s1[0]);

  if (s1.length !== s2.length || head < 0) return false;

  var s3 = s2.slice(head, s2.length).concat(s2.slice(0, head));
  return isSubstring(s1, s3);
}

// without rearranging
function stringRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  return isSubstring(s1 + s1, s2);
}
