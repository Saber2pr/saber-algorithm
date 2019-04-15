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

export interface Node {
  children?: this[]
}

export const BFS = <T extends Node>(
  node: T,
  callback: (currentNode: T) => void
) => {
  callback(node)
  node.children && node.children.forEach(n => BFS(n, callback))
}

export const DFS = <T extends Node>(
  node: T,
  callback: (currentNode: T) => void,
  visited: T[] = []
) => {
  if (!visited.includes(node)) {
    callback(node)
    visited.push(node)
    DFS(node.children[0], callback, visited)
  } else {
    let index = 0
    let current = node.children[index]
    while (visited.includes(current)) {
      ++index
      current = node.children[index]
      if (index === node.children.length) {
        break
      }
    }
    DFS(current, callback, visited)
  }
}
