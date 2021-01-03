/**
 * Binary Tree Node
 */
export class BinaryTreeNode<T> {
  left?: BinaryTreeNode<T>;
  right?: BinaryTreeNode<T>;
  next?: BinaryTreeNode<T>;
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

/**
 * Export all node values of a Binary Tree to an array, traversing the tree using the "next" pointer.
 *
 * @param root
 */
export const export_values_by_successor = function <T>(
  root: BinaryTreeNode<T>
): T[] {
  const result = [] as T[];
  let node = root as BinaryTreeNode<T> | null;
  while (node) {
    result.push(node.value);
    node = node.next || null;
  }

  return result;
};
