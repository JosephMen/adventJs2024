/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
  const numbersTW = timeWorked.split(':')
  const numbersTT = totalTime.split(':')
  
  let totalSecTW = 0
  let totalSecTT = 0
  for(let i = 0; i < 3; i++){
    const tw = numbersTW[i]
    const tt = numbersTT[i]
    totalSecTW += tw * 60 ** (2-i)
    totalSecTT += tt * 60 ** (2-i)
  }
  const percentage = Math.round((totalSecTW / totalSecTT) * 100)
  
  return `${percentage}%`;
}

console.log(getCompleted('01:00:00', '03:00:00'))
console.log(getCompleted('02:00:00', '04:00:00'))
console.log(getCompleted('01:00:00', '01:00:00'))
console.log(getCompleted('00:10:00', '01:00:00'))
console.log(getCompleted('01:10:10', '03:30:30'))
console.log(getCompleted('03:30:30', '05:50:50'))