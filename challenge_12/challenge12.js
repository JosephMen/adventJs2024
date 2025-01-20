/** 
 * @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
	// Code here
	
	const valueOrn = {
		'*': 1,
		'o': 5,
		'^': 10,
		'#': 50,
		'@': 100
	}
	let lastNum = 0
	let sum = 0
	for(let ornament of ornaments){
		const currentValueOfOrn = valueOrn[ornament]
		if(!currentValueOfOrn) return undefined
		let valueToSum = currentValueOfOrn
		if(currentValueOfOrn > lastNum){
			valueToSum = currentValueOfOrn - ( 2 * lastNum)
		}
		lastNum = currentValueOfOrn
		sum += valueToSum
	}
	return sum      
}
console.log(calculatePrice('***'))  // 3   (1 + 1 + 1)
console.log(calculatePrice('*o'))   // 4   (5 - 1)
console.log(calculatePrice('o*'))  // 6   (5 + 1)
console.log(calculatePrice('*o*'))  // 5  (-1 + 5 + 1) 
console.log(calculatePrice('**o*')) // 6  (1 - 1 + 5 + 1) 
console.log(calculatePrice('o***')) // 8   (5 + 3)
console.log(calculatePrice('*o@'))  // 94  (-5 - 1 + 100)
console.log(calculatePrice('*#'))   // 49  (-1 + 50)
console.log(calculatePrice('@@@'))  // 300 (100 + 100 + 100)
console.log(calculatePrice('#@'))   // 50  (-50 + 100)
console.log(calculatePrice('#@Z')) // undefined (z is unknown)