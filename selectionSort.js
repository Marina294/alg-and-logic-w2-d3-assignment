// Marina, Ami, Ayumi

let nums = [5, 7, 9, 4, 1, 8, 25, 3];
let otherNums = [46, 2, 34, 90, 56, 27];
let finalTest = [5, 7, 98, 36, 47, 45, 5, 2];

const selectionSort = function (arr) {
    let minIndex = '';
    let newIndex = ''; 

    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        newIndex = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = newIndex;       
    }
    return arr;
}

console.log(selectionSort(nums)); 
//[ 1, 3, 4,  5, 7, 8, 9, 25]
console.log(selectionSort(otherNums));
//[ 2, 27, 34, 46, 56, 90 ]
console.log(selectionSort(finalTest)); 
//[ 2,  5,  5,  7, 36, 45, 47, 98]