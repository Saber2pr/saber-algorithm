import {
  dedup,
  sortedSquares,
  flipAndInvertImage,
  transpose,
  searchInsert,
  merge,
  sum,
  sortB,
  sortQuick,
  sortSelect
} from '../core/array'
import { Timers } from '@saber2pr/timer'

export function test_array() {
  // console.log(sortedSquares([-7, -3, 2, 3, 11]))
  // console.log(transpose([[1, 2, 3], [4, 5, 6]]))
  // console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
  Timers('quickSort', async () => console.log(sortQuick([2, 1, 5, 4])))
    .then('selectSort', async () => console.log(sortSelect([2, 1, 5, 4])))
    .then('bubbleSort', async () => console.log(sortB([2, 1, 5, 4])))
    .then('sort', async () => console.log([2, 1, 5, 4].sort((a, b) => a - b)))
}
