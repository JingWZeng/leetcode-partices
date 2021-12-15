/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 滑动窗口
  const set = new Set();
  let i = 0,
    j = 0,
    maxLen = 0;
  if (s.length === 0) {
    return 0;
  }
  for (i; i < s.length; i++) {
    if (!set.has(s[i])) {
      //无重复的情况
      set.add(s[i]);
      maxLen = Math.max(maxLen, set.size);
    } else {
      //有重复
      while (set.has(s[i])) {
        set.delete(s[j]);

        j++;
      }
      set.add(s[i]);
    }
  }
  return maxLen;
};
// @lc code=end
