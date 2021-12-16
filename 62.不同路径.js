/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // const meno = []
  // for(let i =0 ;i<n;i++){
  //     meno.push([])
  // }
  // for(let row=0;row<n;row++){
  //     meno[row][0] = 1
  // }
  // for(let col=0;col<m;col++){
  //     meno[0][col] = 1
  // }
  let meno = new Array(n).fill(new Array(m).fill(0));
  meno[0][0] = 1;
  for (let col = 1; col < m; col++) {
    meno[0][col] = 1;
  }

  for (let row = 1; row < n; row++) {
    for (let col = 1; col < m; col++) {
      meno[row][col] = meno[row - 1][col] + meno[row][col - 1];
    }
  }
  return meno[n - 1][m - 1];
};
// @lc code=end
