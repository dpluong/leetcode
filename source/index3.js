/* eslint-disable no-console */
/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @return {number}
 */


const jump = function jump(arr, nums, start, end) {
  arr.push(nums[end]);
  if (nums.length === 1) {
    return arr.reverse();
  }
  for (let i = start; i < end; i += 1) {
    if (nums[i] + i >= end) {
      return jump(arr, nums.slice(start, i + 1), start, i);
    }
  }
};

const arr = [];
const a = [1, 3, 1, 1, 1];
console.log(jump(arr, a, 0, 4));
