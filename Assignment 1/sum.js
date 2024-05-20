var numbers = [2, 3, 5, 7];
var target = 8;

function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length; i++) {
        for (var k = i + 1; k < numbers.length; k++) {
            var sum = numbers[i] + numbers[k];
            if (target === sum) {
                return [i, k];
            }
        }
    }
}
var shownumbers = twoSum(numbers, target);
console.log(shownumbers);
