import { BinaryTreeNode, export_values_by_successor } from "./binary-tree-node";
import { connect_level_order_siblings } from "./connect-level-order-siblings";

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
    const actual = export_values_by_successor(root);

    // assert
    expect(actual).toEqual([12, 7, 1, 9, 10, 5]);
  });
});
