import { BinaryTreeNode } from "./binary-tree-node";

/**
 * Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.
 *
 * @param {BinaryTreeNode<T>} root - root node of a binary tree. The tree nodes "next" pointers have not been connected to its successor.
 */
export const connect_level_order_siblings = function <T>(
  root: BinaryTreeNode<T>
) {
  const queue = [] as BinaryTreeNode<T>[];

  if (root) {
    queue.push(root);
  }

  while (queue.length) {
    let level_size = queue.length;
    let prev_node = null as BinaryTreeNode<T> | null;

    while (level_size--) {
      // remove node
      const node = queue.shift() as BinaryTreeNode<T>;

      // connect successor
      if (prev_node) {
        prev_node.next = node;
      }

      // add child nodes
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

      // update prev_node
      prev_node = node;
    }
  }
};
