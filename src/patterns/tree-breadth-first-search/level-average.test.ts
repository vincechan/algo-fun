import { BinaryTreeNode } from "./binary-tree-node";
import { find_level_averages } from "./level-averages";

describe("level averages", () => {
  it("find level averages", () => {
    const root = new BinaryTreeNode(12);
    root.left = new BinaryTreeNode(7);
    root.right = new BinaryTreeNode(1);
    root.left.left = new BinaryTreeNode(9);
    root.left.right = new BinaryTreeNode(2);
    root.right.left = new BinaryTreeNode(10);
    root.right.right = new BinaryTreeNode(5);

    const actual = find_level_averages(root);

    expect(actual).toEqual([12, 4, 6.5]);
  });
});
