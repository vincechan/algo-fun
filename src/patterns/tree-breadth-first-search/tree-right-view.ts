import { BinaryTreeNode } from "./binary-tree-node";

/**
 * Given a binary tree, return an array containing nodes in its right view. The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.
 *
 * @param {BinaryTreeNode<T>} root
 * @returns {T[]} an array of node values of the right view.
 */
export const tree_right_view = function <T>(root: BinaryTreeNode<T>): T[] {
  const result = [] as T[];
  const queue = [] as BinaryTreeNode<T>[];

  if (root) {
    queue.push(root);
  }

  while (queue.length) {
    let level_size = queue.length;

    // save the level's right most node value
    result.push(queue[level_size - 1].value);

    while (level_size--) {
      // remove node
      const node = queue.shift() as BinaryTreeNode<T>;

      // add child nodes
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return result;
};
