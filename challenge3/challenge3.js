/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    // Code here
    // const categoriesArray = inventory.map(toy => [toy.category, {}])
    // const categoriesObj = Object.fromEntries(categoriesArray)
    // inventory.forEach(toy => {
    //     let quantity = categoriesObj[toy.category][toy.name]
    //     if(quantity) quantity += toy.quantity
    //     else quantity = toy.quantity
    //     categoriesObj[toy.category][toy.name] = quantity
    // })
    // return categoriesObj

    const categorieObj = {}
    for (const toy of inventory){
        const categorie = categorieObj[toy.category]
        if(!categorie){
            const {name, quantity} = toy
            categorieObj[toy.category] = {name: quantity}
        }
    }
    return categorieObj
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