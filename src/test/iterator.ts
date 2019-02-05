import { range } from '../core/iterator'

export function test_iterator_ts() {
  console.log([...range(5)])

  for (let val of range(21, 50, 2)) {
    console.log(val)
  }
}
