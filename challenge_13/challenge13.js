/** 
 * @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  // Code here
  const movesVector = {
    U: [0,1],
    D: [0,-1],
    L: [-1,0],
    R: [1,0]
  }
  const invertMovs = {
    U: 'D',
    D: 'U',
    L: 'R',
    R: 'L'
  }
  const movRegister = []
  const origin = [0,0]
  let lastSimbol = ''
  for(let mov of moves){
    if(!movesVector[mov]){
      lastSimbol = mov
      continue
    } 
    let movToRegist = mov
    let vectorToSum = [...movesVector[mov]]
    if(lastSimbol === '*'){
      vectorToSum[0] *= 2
      vectorToSum[1] *= 2
    }
    if(lastSimbol === '!'){
      const invertMov = invertMovs[mov]
      vectorToSum = movesVector[invertMov]
      movToRegist = invertMov
    }
    if(lastSimbol === '?'){
      vectorToSum = movRegister.includes(mov) ? [0,0] : vectorToSum
    }
    console.log({origin, vectorToSum})
    origin[0] += vectorToSum[0]
    origin[1] += vectorToSum[1]
    movRegister.push(movToRegist)
    lastSimbol = mov
  }
  return (origin[0] === 0 && origin[1] === 0) || origin
}
console.log(isRobotBack('*R*R'))
// console.log(isRobotBack('*R'))
// console.log(isRobotBack('*L'))
// console.log(isRobotBack('*U'))
// console.log(isRobotBack('*D'))
// console.log(isRobotBack(''))
// console.log(isRobotBack('R'))     // [1, 0]
// console.log(isRobotBack('RL'))    // true
// console.log(isRobotBack('RLUD') ) // true
// console.log(isRobotBack('*RU'))   // [2, 1]
// console.log(isRobotBack('R*U'))   // [1, 2]
// console.log(isRobotBack('LLL!R')) // [-4, 0]
// console.log(isRobotBack('R?R'))   // [1, 0]
// console.log(isRobotBack('U?D'))   // true
// console.log(isRobotBack('R!L'))   // [2,0]
// console.log(isRobotBack('U!D'))   // [0,2]
// console.log(isRobotBack('R?L'))   // true
// console.log(isRobotBack('U?U'))   // [0,1]
// console.log(isRobotBack('*U?U'))  // [0,2]
// console.log(isRobotBack('U?D?U?')) // true

// console.log(isRobotBack('R!U?U')) // [1,0]
// console.log(isRobotBack('UU!U?D')) //[0,1]