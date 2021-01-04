import { BinaryTreeNode } from "./binary-tree-node";

/**
 * Given a binary tree, populate an array to represent its level-by-level traversal, left to right.
 *
 * @param root
 */
export const level_order_traverse = function <T>(
  root: BinaryTreeNode<T>
): T[][] {
  const result = [] as T[][];
  const queue = [] as BinaryTreeNode<T>[];

  if (root) {
    queue.push(root);
  }

  while (queue.length > 0) {
    const level_size = queue.length;
    const level_values = [] as T[];

    // process all nodes in current level
    for (let i = 0; i < level_size; i++) {
      // 1. remove the node from queue
      const node = queue.shift() as BinaryTreeNode<T>;

      // 2. save the node value
      level_values.push(node.value);

      // 3. push child nodes onto queue
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(level_values);
  }

  return result;
};
