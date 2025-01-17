/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  // Code here
  reindeer.sort((a,b) => a - b)
  stables.sort((a,b) => a - b)

  return reindeer.reduce((prev, curr, ind) => {
    return prev + Math.abs(curr - stables[ind])
  },0)
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5])) //3

console.log(minMovesToStables([1, 1, 3], [1, 8, 4])) // 8