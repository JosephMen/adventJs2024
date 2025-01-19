/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  const hasDouble = (snow) => {
    let prevLetter = ''
    let indexOfOcurr = 0
    for(const currLetter of snow){
      if (prevLetter === currLetter) return [true, indexOfOcurr - 1]
      prevLetter = currLetter
      indexOfOcurr++
    }
    return [false]
  }
  // Code here
  let word = s
  let [hasDoub, ind] = hasDouble(word)
  while(hasDoub){
    word = word.slice(0, ind) + word.slice(ind + 2);
    [hasDoub, ind] = hasDouble(word)
  }
  return word;
}

console.log(removeSnow('zxxzoz')) // -> "oz"

console.log(removeSnow('abcdd')) // -> "abc"

console.log(removeSnow('zzz')) // -> "z"

console.log(removeSnow('a'))  // -> "a"