function fibs(num) {
    let fibArray = [0, 1];
    for (let i = 2; i < num; i++) {
        fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
    }
    return fibArray;
}

function fibsRec(num, fibArray = [0 , 1]) {
    if (fibArray.length >= num) {
        return fibArray;
    }

    fibArray.push(fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1]);

    return fibsRec(num, fibArray);
}

console.log(fibs(8));

function mergeSort(array) {
    // Base case: if the array has one or zero elements, it is already sorted
    if (array.length <= 1) {
        return array;
    }

    // Split the array into two halves
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    // Recursively sort both halves
    const sortedLeftArray = mergeSort(leftArray);
    const sortedRightArray = mergeSort(rightArray);

    // Merge the sorted halves
    return merge(sortedLeftArray, sortedRightArray);
}

function merge(leftArray, rightArray) {
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare the elements of both arrays and push the smaller one to the sorted array
    while (leftIndex < leftArray.length || rightIndex < rightArray.length) {
        if (leftIndex < leftArray.length && rightIndex < rightArray.length) {
            if (leftArray[leftIndex] < rightArray[rightIndex]) {
                sortedArray.push(leftArray[leftIndex]);
                leftIndex++;
            } else {
                sortedArray.push(rightArray[rightIndex]);
                rightIndex++;
            }
        } else if (leftIndex < leftArray.length) {
            sortedArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    return sortedArray;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));