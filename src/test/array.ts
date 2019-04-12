import {
  dedup,
  sortedSquares,
  flipAndInvertImage,
  transpose,
  searchInsert,
  merge,
  sum,
  sortB,
  sortQuick
} from '../core/array'
import { Timers } from '@saber2pr/timer'

export function test_array() {
  // console.log(sortedSquares([-7, -3, 2, 3, 11]))
  // console.log(transpose([[1, 2, 3], [4, 5, 6]]))
  // console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
  
  Timers('quickSort', async () => sortQuick([2, 1, 5, 4]))
    .then('bubbleSort', async () => sortB([2, 1, 5, 4]))
    .then('sort', async () => [2, 1, 5, 4].sort((a, b) => a - b))
}
