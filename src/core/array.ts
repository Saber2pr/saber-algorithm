/*
 * @Author: saber2pr
 * @Date: 2019-02-14 16:45:07
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-02-14 16:50:48
 */
export const dedup = <T extends Object>(array: T[], key: keyof T): T[] =>
  array.reduce<T[]>(
    (pre, cur) => (pre.find(v => v[key] === cur[key]) ? pre : pre.concat(cur)),
    []
  )

export function join<T>(array: T[], value: T): T[] {
  const result: T[] = []
  for (let i = 0; i < array.length; i++) {
    result.push(array[i], value)
  }
  result.pop()
  return result
}

export const sortedSquares = (A: number[]) =>
  A.map(v => v * v).sort((a, b) => a - b)

export const flipAndInvertImage = (A: number[][]) =>
  A.map(row => row.reverse()).map(row => row.map(col => Number(!col)))

export const transpose = (A: number[][]) =>
  A[0].map((col, i) => A.map(row => row[i]))

export const searchInsert = (nums: number[], target: number) =>
  nums.includes(target)
    ? nums.indexOf(target)
    : [...nums, target].sort((a, b) => a - b).indexOf(target)

export const merge = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) => {
  nums1.splice(
    0,
    nums1.length,
    ...[...nums1.slice(0, m), ...nums2.slice(0, n)].sort((a, b) => a - b)
  )
}
