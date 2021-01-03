import { BinaryTreeNode } from "./binary-tree-node";

/**
 * Given a binary tree, populate an array to represent the averages of all of its levels.
 * @param {BinaryTreeNode<T>} root
 */
export const find_level_averages = function (
  root: BinaryTreeNode<number>
): number[] {
  const result = [] as number[];
  const queue = [] as BinaryTreeNode<number>[];

  if (root) {
    queue.push(root);
  }

  while (queue.length > 0) {
    const level_size = queue.length;
    let total = 0;

    let n = level_size;
    while (n--) {
      // remove node
      const node = queue.shift() as BinaryTreeNode<number>;

      // aggregate value
      total += node.value;

      // add child nodes
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    // save level average
    result.push(total / level_size);
  }

  return result;
};
