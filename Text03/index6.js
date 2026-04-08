let arr = [1, 2, 3, 4, 5];

let isSorted = true;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
        isSorted = false;
        break;
    }
}

console.log(isSorted);