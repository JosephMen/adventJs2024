/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {

  const createLine = (values) => {
    return values.reduce((prev, val, i)=>{
      const fill = new Array(lengths[i] - String(val).length).fill(' ').join('')
      const formatVal = String(val) + fill
      return prev +' ' + formatVal + ' |'
    }, '|')
  }
  // Code here
  let titles = Object.keys(data[0])
  const lengths = titles.map(title => title.length)
  for(let object of data){
    titles.forEach((title, i, array) => {
      const currentLength = String(object[title]).length
      if(lengths[i] < currentLength)
        lengths[i] = currentLength
    })
  }
  const capTitles = titles.map(title => title[0].toUpperCase() + title.slice(1))

  const horizontalLine = lengths.reduce((prev, length) => {
    const subLine = new Array(length + 2).fill('-').join('')
    return prev + subLine + '+'
  }, '+')
  const finalTable = []
  finalTable.push(horizontalLine)
  const titleLine = createLine(capTitles)
  finalTable.push(titleLine)
  finalTable.push(horizontalLine)
  data.forEach(obj => {
    const values = titles.map(t => obj[t])
    const line = createLine(values)
    finalTable.push(line)
  })
  
  finalTable.push(horizontalLine)
  

  return finalTable.join('\n')
}
console.log(drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
]))
console.log()
console.log(drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
]))