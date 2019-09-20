const { expect } = require('chai');
const twoSum = require('../source/index');

describe('towSum', () => {
  describe('find index 2 numbers', () => {
    it('return [0,1]', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      const result = twoSum(nums, target);
      expect(result).to.have.members([1, 0]);
    });

    it('return [6, 5]', () => {
      const nums = [3, 4, 13, 34, 0, 1, 9];
      const target = 10;
      const result = twoSum(nums, target);
      expect(result).to.have.members([5, 6]);
    });

    it('return no result found', () => {
      const nums = [67, 23, 14, 56, 0, 9, 100];
      const target = 1234;
      const result = twoSum(nums, target);
      expect(result).be.equal('no results found');
    });
  });
});
