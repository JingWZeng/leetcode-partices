/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // map里面的key是元素的值，value是索引
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const temp = target - nums[i];
    if (map.has(temp)) {
      return [map.get(temp), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
// @lc code=end
