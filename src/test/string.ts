import {
  slashCount,
  urls,
  findKeys,
  repeatedSubstringPattern
} from '../core/string'

export function test_string_ts() {}

const test = 'aaa import testa const testb export testc import hhh'

const keys = ['import', 'const', 'export']

console.log(repeatedSubstringPattern('abaababaab'))
// console.log(repeatedSubstringPattern('aa'))
// console.log(repeatedSubstringPattern('ab'))
// console.log(repeatedSubstringPattern('abab'))
// console.log(repeatedSubstringPattern('abc'))
// console.log(repeatedSubstringPattern('abcabc'))
