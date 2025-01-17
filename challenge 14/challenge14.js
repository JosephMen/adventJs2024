/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  // Code here
  reindeer.sort((a,b) => a - b)
  stables.sort((a,b) => a - b)

  let sumOfMovs = 0
  for(let i = 0; i < reindeer.length; i++){
    const reinNum = reindeer[i]
    const stbNum = stables[i]
    const distance = reinNum - stbNum
    sumOfMovs += distance < 0 ? -distance : distance
  } 
  return sumOfMovs
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5])) //3

console.log(minMovesToStables([1, 1, 3], [1, 8, 4])) // 8