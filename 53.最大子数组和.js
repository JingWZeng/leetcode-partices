/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  /**
   * 以子序列的结束节点为基准，先遍历出以某个节点为结束的所有子序列，因为每个节点都可能会是子序列的结束节点，因此要遍历下整个序列，
   * 如: 以 b 为结束点的所有子序列: [a , b] [b]
   * 以 c 为结束点的所有子序列: [a, b, c] [b, c] [ c ]。
   * 这里的动态规划解法也是以 先遍历出 以某个节点为结束节点的所有子序列 的思路
   * 因为我们通常的惯性思维是以子序列的开头为基准，先遍历出以 a 为开头的所有子序列，再遍历出以 b 为开头的...
   * 但是动态规划为了找到不同子序列之间的递推关系，恰恰是以子序列的结束点为基准的，这点开阔了我们的思路。
   * 以每个位置为终点的最大子数列都是基于其前一位置的最大子数列计算得出
   * @param nums
   * @returns {number}
   */

  let meno = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    meno = Math.max(nums[i] + meno, nums[i]);
    max = Math.max(max, meno);
  }
  return max;
};
// @lc code=end
