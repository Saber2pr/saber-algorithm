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
  while (reg.test(url.charAt(0))) {
    params.shift()
    url = params.join('/')
  }
  return params
}

export const findKeys = (content: string, keys: string[]) => {
  const record: {
    type: string
    index: number
  }[] = []
  const depwalk = (str: string, keys: string[], index = 0) => {
    if (index === keys.length) {
      return
    }
    const key = keys[index]
    let start = 0
    let pos = str.indexOf(key, start)
    while (pos !== -1) {
      record.push({ type: key, index: pos })
      pos = str.indexOf(key, pos + key.length)
    }
    depwalk(str, keys, index + 1)
  }
  depwalk(content, keys)
  return record.sort((a, b) => a.index - b.index)
}