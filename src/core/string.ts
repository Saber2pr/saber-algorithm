/*
 * @Author: saber2pr
 * @Date: 2019-01-31 20:34:29
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-01-31 20:34:29
 */
export const slashCount = (str: string) => str.split('/').length - 1

export const urls = (url: string) => {
  const params = url.split('/')
  const reg = /\.|\//
  while (url.charAt(0).match(reg)) {
    params.shift()
    url = params.join('/')
  }
  return params
}
