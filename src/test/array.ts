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
  console.time('quickSort')
  console.log('quickSort', sortQuick([2, 1, 5, 4]))
  console.timeEnd('quickSort')

  console.time('selectSort')
  console.log('selectSort', sortSelect([2, 1, 5, 4]))
  console.timeEnd('selectSort')

  console.time('bubbleSort')
  console.log('bubbleSort', sortB([2, 1, 5, 4]))
  console.timeEnd('bubbleSort')

  console.time('sort')
  console.log('sort', [2, 1, 5, 4].sort((a, b) => a - b))
  console.timeEnd('sort')
}
