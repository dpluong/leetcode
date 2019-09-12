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

const target = 23;
const nums = [12, 2, 5, 8, 11, 10];

console.log(twoSum(nums, target));
