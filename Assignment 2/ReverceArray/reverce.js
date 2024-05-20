var numbers = [1, 2, 3, 4, 5];

function reverseArray(numbers) {
    var output = [];
    for (var i = numbers.length - 1; i >= 0; i--) {
        output.push(numbers[i]);
    }
    return output;
}
var reverseArray = reverseArray(numbers);
console.log(reverseArray); 
