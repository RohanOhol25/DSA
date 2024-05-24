const numbers = [1, 2, 4, 6, 3, 7, 8];
// output=5;
function missingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    let arrSum = 0;
    for (let num of arr) {
        arrSum += num;
    }

    return totalSum - arrSum;
}
const missing = missingNumber(numbers);
console.log("The missing integer is:", missing);
