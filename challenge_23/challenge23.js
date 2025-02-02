/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  const highest = nums.reduce((prev, curr) => {
    return curr > prev ? curr : prev
  }, 0)
  const result = []
  for(let i = 1; i < highest; i++) 
    !nums.includes(i) && result.push(i)
  return result
}

console.log(findMissingNumbers([1, 2, 4, 6]))

console.log(findMissingNumbers([4, 8, 7, 2]))

console.log(findMissingNumbers([3, 2, 1, 1]))

console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1]))