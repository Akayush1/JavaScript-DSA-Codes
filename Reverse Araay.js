function reversearray(arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return arr; // Base case
    }

    // Swap elements
    [arr[start], arr[end]] = [arr[end], arr[start]];

    // Recursive call
    return reversearray(arr, start + 1, end - 1);
}

let arr = [1, 2, 3, 4, 5];
reversearray(arr);
console.log(arr); // Output: [5, 4, 3, 2, 1]