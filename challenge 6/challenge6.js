/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    const numLines = box.length - 1
    const numChars = box[0].length - 1
    for (let numLine = 0; numLine <= numLines; numLine++){
        const line = box[numLine]
        const numChar = line.indexOf('*')
        if(numChar !== -1) {
            if(numLine === 0 || numChar === 0) return false
            if(numLine === numLines || numChar === numChars) return false 
            return true
        }
    }
    return false
}

console.log(inBox([
    "###",
    "#*#",
    "###"
]) )

console.log(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
]) )

console.log(inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
]) )

console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
]) )