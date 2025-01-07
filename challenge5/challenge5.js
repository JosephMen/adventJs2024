/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {

    const pairedSizes  = []
    const unpairedShoes = {}
    for(let shoe of shoes){
        const {size} = shoe
        const unpairedShoe = unpairedShoes[size]
        if(unpairedShoe){
            const isTheSame = unpairedShoe.type === shoe.type
            if(!isTheSame){
                unpairedShoe.quantity--
                pairedSizes.push(size)
            }
            else unpairedShoe.quantity++
            if(unpairedShoe.quantity === 0) delete unpairedShoes[size]
            continue
        }
        unpairedShoes[size] = {...shoe, quantity: 1}
    }
    return pairedSizes
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]
const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]
const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
]
// console.log(organizeShoes(shoes))
// console.log(organizeShoes(shoes2))
console.log(organizeShoes(shoes3))
