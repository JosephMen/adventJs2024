/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    function decode_aux(cadena, indice){
        let pivot = ''
        let largo = 0
        while(cadena[indice] !== ')' || cadena.length === indice){
        if(cadena[indice] === '('){
            const [resultado, largo_result] = decode_aux(cadena, ++indice)
            indice += largo_result
            largo += largo_result + 1
            pivot = resultado.split('').reverse().join('') + pivot
        } else {
            pivot = cadena[indice] + pivot
            largo++
            indice++
        }
        }
        largo++
        return [pivot, largo]
    }

    let decoded = ''
    let indice = 0
    while(indice < packages.length){
        if(packages[indice] === '('){
            const [resultado, largo] = decode_aux(packages, ++indice)
            decoded += resultado
            indice += largo
        }else{
            decoded += packages[indice]
            indice++
        }
    }
    return decoded
}