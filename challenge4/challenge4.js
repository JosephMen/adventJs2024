/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    /* Code here */
    if(height === 0) return '#\n#'
    const lines = []
    for(let i = 1; i <= height; i++) {
        const fill = new Array(height - i).fill('_')
        const leafs = new Array(i * 2 - 1).fill(ornament)
        const line = [...fill, ...leafs, ...fill].join('')
        lines.push(line)
    }
    const trunkArray = new Array(height * 2 - 1).fill('_')
    trunkArray[height-1] = '#'
    const trunk = trunkArray.join('')

    lines.push(trunk, trunk)
    return lines.join('\n')
}

const tree = createXmasTree(5, '*')
console.log(tree)

const tree2 = createXmasTree(3, '+')
console.log(tree2)

const tree3 = createXmasTree(6, '@')
console.log(tree3)
