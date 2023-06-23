// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 */


const nums1 = [1,2,3,1]

var containsDuplicate = function(nums) {
    const s = new Set(nums); return s.size !== nums.length
};

console.log(containsDuplicate(nums1))