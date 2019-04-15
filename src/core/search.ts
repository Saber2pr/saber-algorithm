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

// 递归回调
export const DFSRecursionCallback = <T extends Node>(
  node: T,
  callback: (currentNode: T) => void
) => {
  callback(node)
  node.children && node.children.forEach(n => DFSRecursionCallback(n, callback))
}

// 递归写法
export const DFSRecursionResult = <T extends Node>(
  node: T,
  result: T[] = []
) => {
  if (node) {
    result.push(node)
    node.children.forEach(n => DFSRecursionResult(n, result))
  }
  return result
}

// 非递归写法
// 先从stack弹出一个节点，然后压入所有孩子节点
// 循环这个过程直到stack为空
export const DFSIterationCallback = <T extends Node>(
  root: T,
  callback: (currentNode: T) => void,
  stack = [root]
) => {
  while (stack.length) {
    const node = stack.pop() // 改为stack.shift()就会变成广度
    node.children && node.children.forEach(child => stack.push(child))
    callback(node)
  }
}

// 直接遍历queue，先把元素的孩子节点全部入队，然后当前元素出队
// 循环这个过程直到queue为空
export const BFSIterationCallback = <T extends Node>(
  root: T,
  callback: (currentNode: T) => void,
  queue = [root]
) => {
  while (queue.length) {
    queue.forEach(node => {
      node.children && node.children.forEach(child => queue.push(child))
      callback(queue.shift())
    })
  }
}
// 当前层映射到下一层，需要降维
// 循环这个过程直到queue为空
export const BFSIterationMapCallback = <T extends Node>(
  root: T,
  callback: (currentNode: T) => void,
  queue = [root]
) => {
  while (queue.length) {
    queue = [].concat(
      ...queue
        .map(node => {
          callback(node)
          return node.children
        })
        .filter(i => i)
    )
  }
}
