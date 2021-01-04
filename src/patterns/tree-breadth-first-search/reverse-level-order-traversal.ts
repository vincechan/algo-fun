import { BinaryTreeNode } from "./binary-tree-node";

/**
 * Given a binary tree, populate an array to represent its level-by-level traversal in reverse order. i.e. the lowest level comes first.
 * @param root
 */
export const traverse = function <T>(root: BinaryTreeNode<T>): T[][] {
  const result = [] as T[][];
  const queue = [] as BinaryTreeNode<T>[];

  if (root) {
    queue.push(root);
  }

  while (queue.length > 0) {
    let level_size = queue.length;
    const level_values = [] as T[];

    while (level_size--) {
      // remove node from queue
      const node = queue.shift() as BinaryTreeNode<T>;

      // save node value
      level_values.push(node.value);

      // add child nodes to queue
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.unshift(level_values);
  }

  return result;
};
