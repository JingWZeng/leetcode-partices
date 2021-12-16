/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 0) {
    return [];
  }
  const map = new Map();
  for (const str of strs) {
    const c = Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      // a的accii码是97，现在需要放在0位置上
      // charAt(返回指定下标的value,charCodeAt返回指定小标的accii码)
      const accii = str.charCodeAt(i) - 97;
      c[accii]++;
    }
    const key = c.join("-");
    if (map.has(key)) {
      map.set(key, [...map.get(key), str]);
    } else {
      map.set(key, [str]);
    }
  }
  const res = [];
  for (const arr of map) {
    res.push(arr[1]);
  }
  return res;
};
// @lc code=end
