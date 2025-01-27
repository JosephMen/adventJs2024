/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
	const missing = {}
	const extra = {}
	const receivedToys = [...received]
	for (const expToy of expected){
		const index = receivedToys.findIndex((toy) => toy === expToy)
		if(index !== -1) receivedToys.splice(index,1)
		else {
			missing[expToy] ??= 0
			missing[expToy] += 1
		}
	}
	for(const recToy of receivedToys){
		extra[recToy] ??= 0
		extra[recToy] += 1
	}
	
	return {
		missing,
		extra
	}
}

// console.log(fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball']))
// console.log(fixGiftList(
//   ['book', 'train', 'kite', 'train'],
//   ['train', 'book', 'kite', 'ball', 'kite']
// ))

// console.log(fixGiftList(
//   ['bear', 'bear', 'car'],
//   ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
// ))

console.log(fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']))