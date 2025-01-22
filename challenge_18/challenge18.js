/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
	const register = agenda.split('\n')

	const phoneRegex = /\+{1}[0-9]{1,2}(-[0-9]{3}){3}/g
	const nameRegex = /(?<=<)\w+ \w+(?=>)/g
	const addressRegex = /(?<= |^)(\w+ )+/gi
	const result = []
	for(const line of register){		
		const phoneExtract = line.match(phoneRegex)[0]
		if(phoneExtract.includes(phone)){
			if(result.length !== 0) return null
			const name = line.match(nameRegex)[0]
			const address = line.match(addressRegex)[0].trim()
			result.push({name, address})
		}
		
	}
	return result.length === 0 ? null : result[0]
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(agenda, '34-600-123-456'))
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, '600-987'))
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, '111'))
// null
// Explanation: No results

console.log(findInAgenda(agenda, '1'))
// null
// Explanation: Too many results