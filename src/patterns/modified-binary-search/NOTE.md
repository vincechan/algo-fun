# MODIFIED BINARY SEARCH

Search element in a sorted array.

## Time Complexity

O(logN)

## Description

```
// assuming arr is in asc order, if in desc order, the logic to update mid is reversed
let start = 0, end = arr.length - 1;
while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
        return arr[mid];
    }
    else if (key < arr[mid]) {
        // search left half
        end = mid - 1; // search left half
    }
    else {
        // search right half
        start = mid + 1;
    }
}
return -1; // key not found
```

## Notes

- monotonically increasing / decreasing, i.e. arr[i] != arr[i + 1]
- after while loop
  - key not in arr
  - start === end + 1
  - the next closest element to the key will be pointed to by start or end
- for bitonic array, check element at `mid` and `mid + 1` to see if we are on the increasing or decreasing segment of the arr

### Variation - use loop condition `start < end`

- after the loop `start` === `end`
- there will be at least 2 elements in [start,end], and `mid` and `mid + 1` are valid, useful in bitonic array to check if we are in increasing / decreasing segment

```
while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] < arr[mid + 1]) {
        start = mid + 1;
    }
    else {
        end = mid;
    }
}
```
