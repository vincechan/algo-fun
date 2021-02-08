# TWO POINTERS

Userful in problems that deal with sorted arrays and need to find a set of elements that fulfill certain constraints. The set of elements could be a pair, a triplet or even a subarray.

## Time Complexity

O(n)

## Description

```
# if input not sorted, sort the input array, note: the time complexity is not at least nlogn

# define a left pointer to point to start

# define a right pointer to point to the end

while (left < right) {

    # check for condition

    # advance left or right pointer depends on constraint
    # e.g. in target sum problems, if input is sorted in asc order and current sum is smaller than target sum, advance left pointer to go to an element with bigger number
}

```
