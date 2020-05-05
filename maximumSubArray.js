// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let global_max = Number.MIN_SAFE_INTEGER,
    local_max = 0;
  for (let i = 0; i < nums.length; i++) {
    local_max = Math.max(nums[i], local_max + nums[i]);
    if (local_max > global_max) {
      global_max = local_max;
    }
  }
  return global_max;
};

console.log(maxSubArray([4, -1, 2, 1]));
