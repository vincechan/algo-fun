import { BinaryTreeNode, export_values_by_successor } from "./binary-tree-node";
import { connect_level_order_siblings } from "./connect-level-order-siblings";
import { level_order_traverse } from "./level-order-traversal";

/**
 * Perform level order traversal, use "next" successor pointer
 */
const level_order_traversal_by_successor = function <T>(
  root: BinaryTreeNode<T>
): T[][] {
  const result = [] as T[][];
  const queue = [] as BinaryTreeNode<T>[];
  if (root) {
    queue.push(root);
  }
  while (queue.length) {
    let level_size = queue.length;
    const level_values = [] as T[];

    // traverse current level using next pointer
    let next = queue[0] as BinaryTreeNode<T> | null;
    while (next) {
      level_values.push(next.value);
      next = next.next || null;
    }
    result.push(level_values);

    // traverse the level using left & right pointer
    while (level_size--) {
      const node = queue.shift() as BinaryTreeNode<T>;
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

describe("connect level order siblings", () => {
  it("connect level order siblings ", () => {
    // arrange
    const root = new BinaryTreeNode(12);
    root.left = new BinaryTreeNode(7);
    root.right = new BinaryTreeNode(1);
    root.left.left = new BinaryTreeNode(9);
    root.right.left = new BinaryTreeNode(10);
    root.right.right = new BinaryTreeNode(5);

    // act
    connect_level_order_siblings(root);
    const actual = level_order_traversal_by_successor(root);

    // assert
    // compare the result of level order traverse with and without using next pointer
    const expected = level_order_traverse(root);
    expect(actual).toEqual(expected);
  });
});
