import { BinaryTreeNode } from "./binary-tree-node";

/**
 * Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.
 *
 * @param {BinaryTreeNode<T>} root
 * @param {T} key
 *
 * @returns {BinaryTreeNode<T> | null} successor node if found, otherwise null.
 */
export const find_successor = function <T>(
  root: BinaryTreeNode<T>,
  key: T
): BinaryTreeNode<T> | null {
  const queue = [] as BinaryTreeNode<T>[];
  let prev_node: BinaryTreeNode<T> | null = null;

  if (root) {
    queue.push(root);
  }

  while (queue.length > 0) {
    let level_size = queue.length;

    while (level_size--) {
      // remove node
      const node = queue.shift() as BinaryTreeNode<T>;

      // check value
      if (prev_node && prev_node.value === key) {
        return node;
      }

      // add child nodes
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

      prev_node = node;
    }
  }

  return null;
};
