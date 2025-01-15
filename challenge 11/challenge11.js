/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  // Code here
  const firstUnderScoreIndex = filename.indexOf('_') + 1
  const lastDotIndex = filename.lastIndexOf('.')
  const fixedName = filename.slice(firstUnderScoreIndex, lastDotIndex)
  return fixedName
}

console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'))
// ➞ "sleighDesign.png"

console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'))
// ➞ "chimney_dimensions.pdf"

console.log(decodeFilename('987654321_elf-roster.csv.tempfile'))
// ➞ "elf-roster.csv"