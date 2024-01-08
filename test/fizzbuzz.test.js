import { describe, expect, it } from 'vitest'

const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('Parameter should be a number')
  if (Number.isNaN(number)) throw new Error('Parameter should be a number')

  if (number % 3 === 0) return 'fizz'
  return number
}

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

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
    expect(fizzbuzz(3 * 5)).toBe('fizz')
    expect(fizzbuzz(3 * 10)).toBe('fizz')
  })

  it('should return 4 if number provided is 4', () => {
    expect(fizzbuzz(4)).toBe(4)
  })
})
