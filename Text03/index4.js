let arr = [1, 2, 3, 4, 5];
let k = 2;

k = k % arr.length;

// Step 1: Reverse full array
arr.reverse();

// Step 2: Reverse first k elements
reverse(arr, 0, k - 1);

// Step 3: Reverse remaining
reverse(arr, k, arr.length - 1);

console.log(arr);

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}