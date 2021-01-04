import { BinaryTreeNode } from "./binary-tree-node";
import { level_order_traverse } from "./level-order-traversal";

describe("level order traversal", () => {
  it("level_order_traverse", () => {
    const root = new BinaryTreeNode(12);
    root.left = new BinaryTreeNode(7);
    root.right = new BinaryTreeNode(1);
    root.left.left = new BinaryTreeNode(9);
    root.right.left = new BinaryTreeNode(10);
    root.right.right = new BinaryTreeNode(5);

    const actual = level_order_traverse(root);

    expect(actual).toEqual([[12], [7, 1], [9, 10, 5]]);
  });
});
