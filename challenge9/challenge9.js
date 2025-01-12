/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
	// Code here
	const direcVector = {
		U: [-1,0],
		D: [1,0],
		R: [0,1],
		L: [0,-1]
	}
	const visitedWagons = []
	const height = board.length
	const width = board[0].length
  const getEnginePos = () => {
		let i = 0
		let j = 0
		for(let line of board){
			j = line.indexOf('@')
			if(j !== -1) return [i,j]
			i++
		}
	}
	const isOverFlow = (i,j) => {
		if(i === height || i < 0) return true
		if(j === width || j < 0) return true
		return false
	}
	
	const getNextWagonDir = (i,j) => {
		for(let key in direcVector){
			const [sumI, sumJ] = direcVector[key]
			const [newI,newJ] = [i+sumI, j+sumJ]
			if(isOverFlow(newI, newJ)) continue
			const isVisited = visitedWagons.indexOf(`${newI}${newJ}`) !== -1
			if(isVisited) continue;
			if(board[newI][newJ] === 'o') {
				return key
			}
		}
		return ''
	}

	let dirToGo = mov
	let [wagonPosI, wagonPosJ] = getEnginePos(board)
	const nextWagonDir = getNextWagonDir(wagonPosI, wagonPosJ)
	if(nextWagonDir !== dirToGo){
		const [sumI, sumJ] = direcVector[dirToGo]
		const [newI, newJ] = [wagonPosI + sumI, wagonPosJ + sumJ]
		if(isOverFlow(newI, newJ)) return 'crash'
		if(board[newI][newJ] === '*') return 'eat'
		return 'none'
	}
	do {
		const nextWagonDir = getNextWagonDir(wagonPosI, wagonPosJ)
		const dirToMov = nextWagonDir === '' ? dirToGo : nextWagonDir
		const [sumI, sumJ] = direcVector[dirToMov]
		const [newI, newJ] = [wagonPosI + sumI, wagonPosJ + sumJ]
		if(isOverFlow(newI, newJ)) return 'crash'
		if(nextWagonDir === '') return 'none'
		visitedWagons.push(`${wagonPosI}${wagonPosJ}`);
		[wagonPosI, wagonPosJ] = [newI, newJ]
		dirToGo = nextWagonDir
	} while(true)
}



const board = [
	"·····",
	"·····",
	"*·o@·",
	"··o··",
	"··o··"
]

// const board = [
//   '·····',
//   '*····',
//   '@····',
//   'o····',
//   'o····'
// ]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// The train moves to the right and there is empty space on the right