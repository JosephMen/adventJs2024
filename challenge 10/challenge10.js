/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  const registers = {}
  const incDec = {INC: 1, DEC: -1}
  let nextInstIndex = 0
  while (nextInstIndex < instructions.length){
    const instruction = instructions[nextInstIndex]
    const args = instruction.split(' ')
    const [command, arg1, arg2] = args
    if(command === 'MOV'){
      const arg1Value = Number.parseInt(arg1)
      registers[arg2] = isNaN(arg1Value) ? registers[arg1] : arg1Value
    }
    if(command === 'INC' || args[0] === 'DEC'){
      const valueToAdd = incDec[command]
      if(registers[arg1]) registers[arg1] += valueToAdd
      else registers[arg1] = valueToAdd
    }
    if(command === 'JMP'){
      const newInstIndex = Number.parseInt(arg2)
      if(registers[arg1] === 0 || !registers[arg1]) {
        nextInstIndex = newInstIndex
        continue
      }
    }
    nextInstIndex++
  }
  return registers.A
}

const instructions = [
  'MOV -1 C', // copies -1 to register 'C',
  'INC C', // increments the value of register 'C'
  'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
  'MOV C A', // copies register 'C' to register 'A',
  'INC A' // increments the value of register 'A'
]

const instruction2 = [
  "MOV 5 B",
  "DEC B",
  "MOV B A",
  "INC A"
]
console.log(compile(instruction2))