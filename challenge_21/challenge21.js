/**
   * @param {{ value: string; left: any; right: any }} tree
   * @returns {number} - Height of the tree.
   */
function treeHeight(tree) {
	if(!tree) return 0
  const [right, left] = [treeHeight(tree.right), treeHeight(tree.left)]
  return right > left ? right + 1 : left + 1
}

const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}
console.log(treeHeight(tree))