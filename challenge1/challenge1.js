/**
 * 
 * @param {number[]} gifts 
 * @returns {number}
 */
function prepareGifts(gifts) {
    // Code here
    const numbers = new Set(gifts)
    const noDuplicates = Array.from(numbers).sort((a,b) => a - b)
    return noDuplicates
}

console.log(prepareGifts([3, 1, 2, 3, 4, 2, 5]))