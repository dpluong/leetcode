/* eslint-disable no-console */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function twoSum(nums, target) {
  const arr = [];
  const myMap = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const x = target - nums[i];
    if (myMap.has(x)) {
      arr.push(i);
      arr.push(myMap.get(x));
      return arr;
    }
    myMap.set(nums[i], i);
  }
  return 'no results found';
};

if (typeof exports !== 'undefined') {
  module.exports = twoSum;
}
