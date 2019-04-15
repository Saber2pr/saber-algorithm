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

// 冒泡排序 O(N^2)
export const sortB = (args: number[]) => {
  for (let i = 0; i < args.length; i++) {
    // 关键点，j < args.length - (1 + i)
    // 每一轮比较完毕，最后一个元素肯定是最大值，所以做后一个可以不比较，即每循环一次，比较次数减一
    for (let j = 0; j < args.length - (1 + i); j++) {
      // 每一趟都是比较相邻两个数
      if (args[j] > args[j + 1]) {
        const temp = args[j]
        args[j] = args[j + 1]
        args[j + 1] = temp
      }
    }
  }
  return args
}
// 快速排序 O(nlogn)
export function sortQuick(arr: number[]): number[] {
  // 终止条件，被拆分为一个元素
  if (arr.length <= 1) return arr
  // 找到中间元素索引
  const index = Math.floor(arr.length / 2)
  // 中间元素值
  const stand = arr[index]
  // 去掉中间元素
  arr.splice(index, 1)
  const left = []
  const right = []
  // 以中间元素为基准，小的值放在左边，大的放右边
  arr.forEach(v => (v < stand ? left.push(v) : right.push(v)))
  // 连接好left、中间元素和right，递归
  // 注意此处为二分法，left会不断拆分成左中右
  return sortQuick(left).concat(stand, sortQuick(right))
}

// 选择排序 O(N^2)
export function sortSelect(arr: number[]) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    let index = i
    for (let j = i + 1; j < len; j++) {
      // 每一轮比较选出最小值索引
      if (arr[j] < arr[i]) {
        index = j
      }
    }
    // 若
    if (index !== i) {
      const temp = arr[i]
      arr[i] = arr[index]
      arr[index] = temp
    }
  }
  return arr
}
