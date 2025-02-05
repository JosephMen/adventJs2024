/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  let index = 0
  let value = 0
  let goEndLoop = false
  let goEndCond = false
  let initLoopIndex = 0
  while(index < code.length){
    const ins = code[index]
    if(ins === ']' && value !== 0){
      index = initLoopIndex
      continue
    }
    else if(goEndCond) goEndCond = ins !== '}'
    else if(goEndLoop) goEndLoop = ins !== ']'   
    else if(ins === '{') goEndCond = value === 0
    else if(ins === '[' ) {
      goEndLoop = value === 0
      initLoopIndex = index + 1
    }
    else if(ins === '+') value++ 
    else if(ins === '-') value--
    index++
  }
  return value
}

// console.log(execute('+++')) // 3
// console.log(execute('+--')) // -1
// console.log(execute('>+++[-]')) // 0
// console.log(execute('>>>+{++}')) // 3
// console.log(execute('+{[-]+}+')) //2
// console.log(execute('{+}{+}{+}')) // 0
// console.log(execute('------[+]++')) // 2
// console.log(execute('-[++{-}]+{++++}')) // 5
// console.log(execute('{+++++}')) //0
// console.log(execute(`-[+{++}]++{[-]}++`)) // 2
console.log(execute(`++++[-->]>++`)) // 2 move and increment