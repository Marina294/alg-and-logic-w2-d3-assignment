// Marina, Ami, Ayumi

let nums = [5, 7, 9, 4, 1, 8, 25, 3];
let otherNums = [46, 2, 34, 90, 56, 27];
let finalTest = [5, 7, 98, 36, 47, 45, 5, 2];

const bubbleSort = function (arr) {
    for (let i = arr.length - 1; i >= 0; i--) {

        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let newIndex = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = newIndex;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(nums)); 
//[ 1, 3, 4,  5, 7, 8, 9, 25]
console.log(bubbleSort(otherNums));
//[ 2, 27, 34, 46, 56, 90 ]
console.log(bubbleSort(finalTest)); 
//[ 2,  5,  5,  7, 36, 45, 47, 98]