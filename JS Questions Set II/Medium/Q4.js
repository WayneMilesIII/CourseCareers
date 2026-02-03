/*
    Write a JavaScript function named rotateArray that takes two parameters: an array of
integers arr and a non-negative integer k, which represents the number of times the
array elements should be rotated to the right. The function should rotate the array
in-place, meaning you should modify the array directly without using extra space for
another array. After performing the rotation, the function doesn't need to return anything.
In the context of an array, "rotation" refers to moving the elements of the array around to
new positions according to a specific rule. When we talk about rotating an array to the
right (or clockwise), it means that each element is moved to the next position in the
array, and the last element moves to the first position. This process is repeated a
specified number of times (k times, in our case).
    Example:
    Input: arr = [1, 2, 3, 4, 5, 6, 7], k = 3
    After rotating the array 3 times to the right, the modified arr should be:
    [5, 6, 7, 1, 2, 3, 4]
*/

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;  
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    console.log(arr);
}
function reverse(arr, start, end) {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
rotateArray([1, 2, 3, 4, 5], 5); // [1, 2, 3, 4, 5]
rotateArray([1, 2, 3, 4, 5], 8); // [3, 4, 5, 1, 2]
rotateArray([1, 2, 3, 4, 5], 0); // [1, 2, 3, 4, 5]
rotateArray([], 3); // []
rotateArray([1], 10); // [1]
rotateArray([-1, -2, -3, -4, -5], 2); // [-4, -5, -1, -2, -3]
rotateArray([1, 2, 3, 4, 5, 6], 1); // [6, 1, 2, 3, 4, 5]