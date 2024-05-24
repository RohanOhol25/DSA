function findIntersection(arr1, arr2) {
    const intersection = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
            intersection.push(arr1[i]);
            console.log("Intersection of the two arrays:", intersection);
        }else{
            console.log("nothing found");
        }
    }

    return intersection;
}


const array1 = [1, 4, 3, 1];
const array2 = [2, 2];
const intersection = findIntersection(array1, array2);

