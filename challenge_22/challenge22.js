/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
	// Code here
	const numOfGifts = gifts.length

	const backTrack = (lengthGr, indexStart, subGroup, acc) => {
		if (lengthGr === 0) return acc.push(subGroup)
		for(let i = 0; i + indexStart < numOfGifts; i++){
			const extendedGroup = [...subGroup, gifts[indexStart + i]]
			backTrack(lengthGr - 1, indexStart + 1 + i, extendedGroup, acc)
		}
	}
	const result = []
	for(let i = 1; i <= numOfGifts; i++){
		backTrack(i, 0, [], result)
	}
	return result
}
const result1 = generateGiftSets(['car', 'doll', 'puzzle'])
console.log(result1)

console.log(generateGiftSets(['ball']))

console.log(generateGiftSets(['game', 'pc']))