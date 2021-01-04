import { BinaryTreeNode } from "./binary-tree-node";
import { tree_right_view } from "./tree-right-view";

describe("tree_right_view", () => {
  it("returns tree right view", () => {
    const root = new BinaryTreeNode(12);
    root.left = new BinaryTreeNode(7);
    root.right = new BinaryTreeNode(1);
    root.left.left = new BinaryTreeNode(9);
    root.right.left = new BinaryTreeNode(10);
    root.right.right = new BinaryTreeNode(5);
    root.left.left.left = new BinaryTreeNode(3);

    const actual = tree_right_view(root);

    expect(actual).toEqual([12, 1, 5, 3]);
  });
});
