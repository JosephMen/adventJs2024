/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  let word = s
  let i = 0;
  let prevLetter = ''
  while(i < word.length){
    if(word[i] === prevLetter){
      word = word.slice(0,i - 1) + word.slice(i + 1)
      i = 0
      prevLetter = ''
      continue
    }
    prevLetter = word[i]
    i++
  }
  return word
}

console.log(removeSnow('zxxzoz')) // -> "oz"

console.log(removeSnow('abcdd')) // -> "abc"

console.log(removeSnow('zzz')) // -> "z"

console.log(removeSnow('a'))  // -> "a"