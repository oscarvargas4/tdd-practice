import { describe, expect, it } from 'vitest'

const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('Parameter should be a number')
  if (Number.isNaN(number)) throw new Error('Parameter should be a number')

  if (number % 3 === 0 && number % 5 === 0) return 'fizzbuzz'
  if (number % 3 === 0) return 'fizz'
  if (number % 5 === 0) return 'buzz'
  return number
}

describe('fizzbuzz', () => {
  it('should throw error if not number provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw a specific error message if not number provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow(/number/)
  })

  it('should throw a specific error message not number provided as parameter', () => {
    expect(() => fizzbuzz(NaN)).toThrow('Parameter should be a number')
  })

  it('should return 1 if number provided 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number provided 1', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return "fizz" if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(3 * 2)).toBe('fizz')
    expect(fizzbuzz(3 * 6)).toBe('fizz')
    expect(fizzbuzz(3 * 9)).toBe('fizz')
  })

  it('should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(5 * 2)).toBe('buzz')
    expect(fizzbuzz(5 * 5)).toBe('buzz')
    expect(fizzbuzz(5 * 10)).toBe('buzz')
  })

  it('should return "fizzbuzz" if number provided is multiple of 5 & 3 at the same time', () => {
    expect(fizzbuzz(5 * 3)).toBe('fizzbuzz')
  })
})
