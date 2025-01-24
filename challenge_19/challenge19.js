/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
	// Code here
	const boxRepresentations = {
		1: [" _ ", "|_|"] ,
		2: [" ___ ", "|___|"],
		5: [" _____ ", "|     |", "|_____|"],
		10: [" _________ ", "|         |", "|_________|"]
	}
	const boxesSize = [10,5,2,1]
	let boxIndex = 0
	let remainingWeight = weight
	let returnString = ''
	let lastBoxTop = ''
	while(remainingWeight !== 0){
		const boxSize = boxesSize[boxIndex]
		if(boxSize > remainingWeight){
			boxIndex++
			continue
		}
		const box = [...boxRepresentations[boxSize]]
		const addTail = returnString.length === 0 ? `` : `\n${returnString}`
		if(returnString.length !== 0){
			const tail = box.length - 1
			const lengthBottom = box[0].length
			box[tail] += lastBoxTop.slice(lengthBottom).trim()
		}
		if(remainingWeight - boxSize === 0){	
			return box.join('\n') + addTail 
		}
		else{
			const [top, ...boxNew] = box
			lastBoxTop = top
			returnString = boxNew.join('\n') + addTail
		}
		remainingWeight -= boxSize
	}
	return returnString
}

console.log(distributeWeight(3))
// console.log(distributeWeight(2))
// console.log(distributeWeight(4))
// console.log(distributeWeight(17))
     