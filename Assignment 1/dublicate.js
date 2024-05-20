var arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        if (output.indexOf(arr[i]) === -1) {
            output.push(arr[i]);
        }
    }
    return output;
}
var arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log(arrayWithoutDuplicates);