/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
	// Code here
	const backTrack = (indexes, acc) => {
		acc.push(indexes.map(i => gifts[i]))
		for(let i = indexes.length - 1; i >= 0; i--){

		}
	}
	const result = []
	for(let i = 1; i < gifts.length; i++){

	}
	return [].fill()
}