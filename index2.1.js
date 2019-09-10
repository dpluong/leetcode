/* eslint-disable no-console */
const isMatch = function isMatch(s, p) {
  if (s.length > p.length) { return false; }
  let i = 0;
  let j = 0;
  let firstMatch = true;
  while (i < s.length || j < p.length) {
    if (p[j] === '.') {
      firstMatch = firstMatch && true;
      i += 1;
      j += 1;
    } else if (s[i] === p[j]) {
      firstMatch = firstMatch && true;
      i += 1;
      j += 1;
    } else {
      if (j === 0 && p[j] === '*') firstMatch = false;
      if (p[j] === '*') {
        firstMatch = firstMatch && ((s[i] === s[i - 1]) || p[j - 1] === '.');
        i += 1;
        j += 1;
      } else if (p[j] !== '*' && p[j] !== '.' && p[j + 1] === '*') {
        j += 2;
      } else {
        firstMatch = firstMatch && (s[i] === p[j]);
        i += 1;
        j += 1;
      }
    }
  }
  return firstMatch;
};

console.log(isMatch('abeedf', '.*.*.*a'));
