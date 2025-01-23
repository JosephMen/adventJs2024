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
	while(remainingWeight !== 0){
		const boxSize = boxesSize[boxIndex]
		if(boxSize <= remainingWeight){
			const box = boxRepresentations[boxSize]
			if(remainingWeight - boxIndex === 0){
				if(returnString === ''){
					returnString = box.join('\n')
				}
				else{
					returnString = box.slice(1).join('\n') + returnString
				}
			}
			remainingWeight -= boxSize
			continue
		}
		boxIndex++
	}
	return necessaryBoxes;	
}

console.log(distributeWeight(15))
     