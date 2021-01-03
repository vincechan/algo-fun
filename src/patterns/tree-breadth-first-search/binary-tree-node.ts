/**
 * Binary Tree Node
 */
export class BinaryTreeNode<T> {
  left?: BinaryTreeNode<T>;
  right?: BinaryTreeNode<T>;
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}
