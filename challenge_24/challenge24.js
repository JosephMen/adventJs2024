/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  const root = tree1.value
  const checker = (subTree1, subTree2) => {
    // if(subTree1.value !== subTree2.value) return 1
    // if(subTree1.left && subTree2.right)
    //   if(checker(subTree1.left, subTree2.right)) return 1
      
    // if(subTree1.right && subTree2.left)
    //   if(checker(subTree1.right, subTree2.left)) return 1
    if(subTree1 ===  subTree2) return 
    if(subTree1.value !== subTree2.value) return 1
    if(checker(subTree1.left, subTree2.right)) return 1
    if(checker(subTree1.right, subTree2.left)) return 1
  }
  const result = checker(tree1, tree2)
  if(result) return [false, root]
  return [true, root]
}

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' },
}

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}
console.log(isTreesSynchronized(tree1, tree2))
console.log(isTreesSynchronized(tree1, tree3))
console.log(isTreesSynchronized(tree1, tree4))