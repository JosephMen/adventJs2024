/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    // Code here
    const longest = names.reduce((prev, current) => {
        if (prev < current.length) return current.length
        return prev
    }, 0)

    const horizontalLine = new Array(longest+4).fill('*').join('')
    const frameArray = []
    frameArray.push(horizontalLine)
    names.forEach((name) => {
        const countBlanks = longest - name.length
        const fill = new Array(countBlanks).fill(' ').join('') 
        const line = '* ' + name + fill +' *'
        frameArray.push(line)
    })
    frameArray.push(horizontalLine)
    return frameArray.join('\n')

}
