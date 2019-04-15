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

export const DFSCallback = <T extends Node>(
  node: T,
  callback: (currentNode: T) => void
) => {
  callback(node)
  node.children && node.children.forEach(n => DFSCallback(n, callback))
}

export const DFSResult = <T extends Node>(node: T, result: T[] = []) => {
  if (node) {
    result.push(node)
    node.children.forEach(n => DFSResult(n, result))
  }
  return result
}

// 先从stack弹出一个节点，然后压入所有孩子节点
// 循环这个过程直到stack为空
export const DFSQuick = <T extends Node>(
  root: T,
  callback: (currentNode: T) => void,
  stack = [root]
) => {
  while (stack.length !== 0) {
    const node = stack.pop()
    node.children && node.children.forEach(n => stack.push(n))
    callback(node)
  }
}

export const BFSCallback = <T extends Node>(
  node: T,
  callback: (currentNode: T) => void
) => {}
