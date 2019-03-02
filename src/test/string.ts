import { slashCount, urls, findKeys } from '../core/string'

export function test_string_ts() {}

const test = 'aaa import testa const testb export testc import hhh'

const keys = ['import', 'const', 'export']

console.log(findKeys(test, keys))
