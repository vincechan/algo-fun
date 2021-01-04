# Tree Breadth First Search

Any problem that involves traversing a tree level by level can be solved with this pattern. Use a Queue to keep track of all nodes of a level before we jump onto the next level.

## Time Complexity

O(N) - each node will be visited once.

## Space Complexity

O(W) - where W is the maximum width of the tree. Since the maximum tree width is N/2, this is also O(N).

## Description

```
# push root node onto queue
const queue = [];

# outer loop - each iteration process a tree level
while (queue.length) {

  const level_width = queue_length

  # inner loop - each iteration process a node in the level
  for (let i = 0; i < level_width; i++) {

    # remove node from queue
    const node = queue.shift();

    # process node value

    # add child nodes to queue
    if (node.left) queue.add(node.left);
    if (node.right) queue.add(node.right);
  }
}
```
