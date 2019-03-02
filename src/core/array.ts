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
