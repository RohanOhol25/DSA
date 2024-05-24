function findIntersection(arr1, arr2) {
    const intersection = [];
    const counts = {};
    for (const num of arr1) {
        counts[num] = (counts[num] || 0) + 1;
    }  
    for (const num of arr2) {
        if (counts[num] > 0) {
            intersection.push(num);
            counts[num]--;
        }
    }
    return intersection;
}
const array1 = [1,2,1];
const array2 = [2,];
const intersection = findIntersection(array1, array2);
console.log("Intersection of the two arrays:", intersection);
