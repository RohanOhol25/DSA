const number = [1, 2, 3, 4, 5, 2, 3, 4, 1, 2, 3];
function countFrequency(number) {
    const frequencyMap = {};
    
    for (let i = 0; i < number.length; i++) {
        const num = number[i];
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }
    }
    return frequencyMap;
}

const frequency = countFrequency(number);
console.log("Frequency of each element:", frequency);
