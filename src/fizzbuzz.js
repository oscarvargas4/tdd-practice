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

  if (number % 3 === 0 && number % 5 === 0) return 'fizzbuzz'
  if (number % 3 === 0) return 'fizz'
  if (number % 5 === 0) return 'buzz'
  return number
}

export default fizzbuzz
