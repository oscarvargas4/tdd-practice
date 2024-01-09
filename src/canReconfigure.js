export const canReconfigure = (from, to) => {
  if (typeof from !== 'string') throw new Error('From parameter is not a string')
  if (typeof to !== 'string') throw new Error('To parameter is not a string')

  const hasSameLenght = from.length === to.length
  if (!hasSameLenght) return false

  const hasSameUniqueLetter = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetter) return false

  const transformations = {}

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter]
    if (storedLetter && storedLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }

  return true
}
