/*
 * @Author: saber2pr
 * @Date: 2019-01-31 20:26:02
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-02-14 17:11:50
 */
export const deepSearch = (
  array: { [k: string]: any }[],
  callback: (value: string) => void
): void =>
  array.forEach(obj =>
    Object.keys(obj).forEach(key =>
      Array.isArray(obj[key])
        ? deepSearch(obj[key], callback)
        : callback(obj[key])
    )
  )
