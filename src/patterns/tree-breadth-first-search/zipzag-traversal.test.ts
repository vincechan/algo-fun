import { BinaryTreeNode } from "./binary-tree-node";
import { traverse } from "./zigzag-traversal";

describe("zizag traversal", () => {
  it("traverse", () => {
    var root = new BinaryTreeNode(12);
    root.left = new BinaryTreeNode(7);
    root.right = new BinaryTreeNode(1);
    root.left.left = new BinaryTreeNode(9);
    root.right.left = new BinaryTreeNode(10);
    root.right.right = new BinaryTreeNode(5);

    const actual = traverse(root);

    expect(actual).toEqual([[12], [1, 7], [9, 10, 5]]);
  });
});
