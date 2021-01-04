import { BinaryTreeNode } from "./binary-tree-node";
import { find_minimum_depth } from "./minimum-depth";

describe("minimum depth", () => {
  it("should return 1 with just one node tree", () => {
    var root = new BinaryTreeNode(12);
    const actual = find_minimum_depth(root);
    expect(actual).toEqual(1);
  });

  it("should find minimum depth - example 1", () => {
    var root = new BinaryTreeNode(12);
    root.left = new BinaryTreeNode(7);
    root.right = new BinaryTreeNode(1);
    root.right.left = new BinaryTreeNode(10);
    root.right.right = new BinaryTreeNode(5);

    const actual = find_minimum_depth(root);

    expect(actual).toEqual(2);
  });

  it("should find minimum depth - example 2", () => {
    var root = new BinaryTreeNode(12);
    root.left = new BinaryTreeNode(7);
    root.right = new BinaryTreeNode(1);
    root.right.left = new BinaryTreeNode(10);
    root.right.right = new BinaryTreeNode(5);
    root.left.left = new BinaryTreeNode(9);
    root.right.left.left = new BinaryTreeNode(11);

    const actual = find_minimum_depth(root);

    expect(actual).toEqual(3);
  });
});
