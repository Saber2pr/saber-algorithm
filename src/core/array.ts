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

export const sum = (args: number[]) => {
  return (f => f(f))(sum => args.length && args.pop() + sum(sum))
}

export const sortB = (args: number[]) => {
  for (let i = 0; i < args.length; i++) {
    // 从当前元素往后冒泡比较，故称冒泡排序
    for (let j = i + 1; j < args.length; j++) {
      if (args[i] > args[j]) {
        const temp = args[i]
        args[i] = args[j]
        args[j] = temp
      }
    }
  }
  return args
}

export function sortQuick(arr: number[]): number[] {
  if (arr.length <= 1) return arr
  const index = arr.length % 2 ? (arr.length - 1) / 2 : arr.length / 2
  const stand = arr[index]
  arr.splice(index, 1)
  const left = []
  const right = []
  arr.forEach(v => (v < stand ? left.push(v) : right.push(v)))
  return sortQuick(left).concat(stand, sortQuick(right))
}
