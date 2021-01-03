import { BinaryTreeNode } from "./binary-tree-node";
import { find_successor } from "./level-order-successor";

describe("level order successor", () => {
  const root = new BinaryTreeNode(12);
  root.left = new BinaryTreeNode(7);
  root.right = new BinaryTreeNode(1);
  root.left.left = new BinaryTreeNode(9);
  root.right.left = new BinaryTreeNode(10);
  root.right.right = new BinaryTreeNode(5);

  it("find successor - example 1", () => {
    const actual = find_successor(root, 12);
    expect(actual?.value).toEqual(7);
  });

  it("find successor - example 2", () => {
    const actual = find_successor(root, 9);
    expect(actual?.value).toEqual(10);
  });
});
