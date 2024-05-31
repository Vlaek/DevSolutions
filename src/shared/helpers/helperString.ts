export function capitalizeFirstLetterOfEachWord(str: string) {
  return str.toLowerCase().replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase()
  })
}

export function capitalizeFirstLetter(str: string) {
  const newStr = str.toLowerCase()
  return newStr[0].toUpperCase() + newStr.slice(1)
}
