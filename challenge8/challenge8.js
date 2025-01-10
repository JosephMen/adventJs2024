/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    const shifts = indices.length - 1
    const lanesArray = indices.map((indexReinder, index) => {
      const indexR = (length + indexReinder)%length
      const laneArray = new Array(length).fill(`~`)
      const fill = new Array(shifts - index).fill(' ').join('')
      if(indexR !== 0) laneArray[indexR] = 'r';
      return fill + laneArray.join('') + ` /${index+1}`
    })
    return lanesArray.join('\n')
}
//console.log(drawRace([0, 5, -3], 10))

//console.log(drawRace([2, -1, 0, 5], 8))

console.log(drawRace([3, 7, -2], 12))