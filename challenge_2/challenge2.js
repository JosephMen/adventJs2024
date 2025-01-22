/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    const longest = names.reduce((prev, current) => {
        return prev < current.length ? current.length : prev
    }, 0)
  
    const horizontalLine = new Array(longest+4).fill('*').join('')
    let stringRet = horizontalLine + '\n'
    for(const name of names) {
      let fill =  new Array(longest - name.length).fill(' ').join('')
      stringRet += '* ' + name + fill + ' *\n'
    }
    stringRet += horizontalLine
    return stringRet
}
