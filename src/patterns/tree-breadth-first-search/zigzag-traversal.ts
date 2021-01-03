import { BinaryTreeNode } from "./binary-tree-node";

/**
 * Given a binary tree, populate an array to represent its zigzag level order traversal. It populates the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.
 *
 * @param {BinaryTreeNode<T>} root
 */
export const traverse = function <T>(root: BinaryTreeNode<T>): T[][] {
  const result = [] as T[][];
  const queue = [] as BinaryTreeNode<T>[];
  let left2right = true;

  if (root) {
    queue.push(root);
  }

  while (queue.length > 0) {
    let level_size = queue.length;
    const level_values = [] as T[];

    while (level_size--) {
      // remove node
      const node = queue.shift() as BinaryTreeNode<T>;

      // save value
      if (left2right) {
        level_values.push(node.value);
      } else {
        level_values.unshift(node.value);
      }

      // add child nodes
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    // toggle direction for next level
    left2right = !left2right;

    // save current level values
    result.push(level_values);
  }

  return result;
};
