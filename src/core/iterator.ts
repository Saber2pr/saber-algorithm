/*
 * @Author: saber2pr
 * @Date: 2019-02-05 11:29:09
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-02-05 11:29:09
 */
export function* range(start = 0, stop = 0, step = 1) {
  if (stop < start) [start, stop] = [0, start]
  for (let i = start; i < stop; i += step) yield i
}
