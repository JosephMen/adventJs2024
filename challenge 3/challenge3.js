/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    // const obj = {}
    // for(let {name, quantity, category} of inventory){
    //   ((obj[category] ??= {})[name] ??= 0) + quantity
    //   // obj[category][name] += quantity
    // }
    // return obj
    const algo = {};
    ((algo['b'] ??= {})['name'] ??= 1) += 5
    return algo
}

const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]

const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ]

const inventory3 = []
const result = organizeInventory(inventory2)
console.log(result)