function moveZerosToEnd(arr) {
    let countNonZeros = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[countNonZeros++] = arr[i];
        }
    }
    for (let i = countNonZeros; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}
const arr = [0, 1, 0, 3, 12];
const modifiedArr = moveZerosToEnd(arr);
console.log("Array after moving zeros to end:", modifiedArr);
