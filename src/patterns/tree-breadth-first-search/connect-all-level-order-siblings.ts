import { BinaryTreeNode } from "./binary-tree-node";

/**
 * Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.
 *
 * @param {BinaryTreeNode<T>} root - root node of a binary tree. The tree nodes "next" pointers have not been connected to its successor.
 */
export const connect_all_level_order_siblings = function <T>(
  root: BinaryTreeNode<T>
) {
  const queue = [] as BinaryTreeNode<T>[];
  let prev_node = null as BinaryTreeNode<T> | null;

  if (root) {
    queue.push(root);
  }

  while (queue.length) {
    // remove node
    const node = queue.shift() as BinaryTreeNode<T>;

    // connect successor and update prev_node
    if (prev_node) {
      prev_node.next = node;
    }
    prev_node = node;

    // add child nodes
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
};
