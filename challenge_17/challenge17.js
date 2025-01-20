/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
	
	const bounds = [ 
		[1,0], // down
		[-1,0], // up,
		[0,-1], // left
		[0,1], // right
		[-1,-1], // up left
		[-1,1], // up right
		[1,-1], // down left
		[1,1],  // down right
	];
	const height = grid.length
	const width = grid[0].length
	const countBombs = (row, col) => {
		let numBombs = 0
		for(let bound of bounds){
			const [newRow, newCol] = [row + bound[0], col + bound[1]];
			const isOutBound = newRow < 0 || newRow === height || newCol < 0 || newCol === width 
			if(isOutBound) continue
			grid[newRow][newCol] && numBombs++
		}
		return numBombs
	}
	const returnArray = []
	for(let i = 0; i < height; i++){
		const row = []
		for(let j = 0; j < width; j++){
			row.push(countBombs(i,  j))
		}
		returnArray.push(row)
	}
	return returnArray
}

const printGrid = (grid) => {
	console.log('\n')
	grid.forEach(row => console.log(row))
}
const result1 = detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
printGrid(result1)

const result2 = detectBombs([
  [true, false],
  [false, false]
])
printGrid(result2)

const result3 = detectBombs([
  [true, true],
  [false, false],
  [true, true]
])
printGrid(result3)