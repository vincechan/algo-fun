import { BinaryTreeNode } from "./binary-tree-node";

/**
 * Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.
 * @param {BinaryTreeNode<T>} root
 */
export const find_minimum_depth = function <T>(
  root: BinaryTreeNode<T>
): number {
  let depth = 0;
  const queue = [] as BinaryTreeNode<T>[];

  if (root) {
    queue.push(root);
  }

  while (queue.length > 0) {
    depth++;
    let level_size = queue.length;

    // process one level at a time
    while (level_size--) {
      // remove node
      const node = queue.shift() as BinaryTreeNode<T>;

      // found leaf node, return depth
      if (node.left == null && node.right == null) {
        return depth;
      }

      // add child nodes
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return depth;
};
