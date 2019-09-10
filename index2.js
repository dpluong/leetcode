/* eslint-disable no-console */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function isMatch(s, p) {
  if (p.length === 0) { return s.length === 0; }
  const checkMatch = !(s.length === 0) && (p.charAt(0) === s.charAt(0) || p.charAt(0) === '.');
  if (p.length >= 2 && p.charAt(1) === '*') {
    return isMatch(s, p.substring(2)) || (checkMatch && isMatch(s.substring(1), p));
  }
  return checkMatch && isMatch(s.substring(1), p.substring(1));
};

console.log(isMatch('aaa', 'a**'));
