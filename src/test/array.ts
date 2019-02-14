import { dedup } from '../core/array'
import { describe, expect } from 'saber-expect'

const person = [
  { id: 1, name: 'nango' },
  { id: 2, name: 'nango' },
  { id: 3, name: 'nango' },
  { id: 2, name: 'nango' },
  { id: 5, name: 'nango' }
]

const result = [
  { id: 1, name: 'nango' },
  { id: 2, name: 'nango' },
  { id: 3, name: 'nango' },
  { id: 5, name: 'nango' }
]

export function test_array() {
  describe('array', () => {
    expect('reset', () => {
      const res = dedup(person, 'id')
      // console.log(res)
      return res.toString() === result.toString()
    })
  })
}
