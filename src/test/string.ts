import { slashCount, urls, findKeys } from '../core/string'
import { describe, expect } from 'saber-expect'

export function test_string_ts() {
  // describe('string', () => {
  //   expect('urls', () => {
  //     const res = urls('../../lib/core/iterator.d.ts')
  //     // console.log(urls('../../lib/core/iterator.d.ts'))
  //     return res.toString() === ['lib', 'core', 'iterator.d.ts'].toString()
  //   }).expect('slashCount', () => {
  //     const res = slashCount('src/core/demo')
  //     // console.log(res)
  //     return res === 2
  //   })
  // })
}

const test = 'aaa import testa const testb export testc import hhh'

const keys = ['import', 'const', 'export']

console.log(findKeys(test, keys))
