/*
Create a function that receives a number parameter:
  - Show "fizz" if parameter multiple of 3
  - Show "buzz" if parameter multiple of 5
  - Show "fizzbuzz" if parameter multiple of 3 & 5 at the same time
  - Show the number if the parameter is not multiple of the specified cases
*/

const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('Parameter should be a number')
  if (Number.isNaN(number)) throw new Error('Parameter should be a number')

  const multiplies = {
    3: 'fizz',
    5: 'buzz'
  }

  let output = ''
  for (const [multiplier, word] of Object.entries(multiplies)) {
    if (number % multiplier === 0) output += word
  }

  return output === '' ? number : output
}

export default fizzbuzz
