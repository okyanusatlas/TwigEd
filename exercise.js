/*
* Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N
equally sized arrays.
Where the size of the original array cannot be divided equally by N, the final part should have a length equal
to the remainder.
*
*
* groupArrayElements([1, 2, 3, 4, 5], 3);
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
*
* */


//1) We need to calculate what would be the length of an inner array in "normal" case(e.g all cases except the last one
//2) we should go through the given array "arr" to create new elements and add them to our result
//3) we should add remaining elements of original array as the last element
const groupArrayElements = (arr, amountOfInnerArrays) => {
    //simple validation step
    if(arr.length < 2) return 'please enter a valid array';
    if(amountOfInnerArrays < 1) return `please enter an amount that's equal or greater than 1, '${amountOfInnerArrays}' is not valid input`;
    //calculate length of "normal" elements
    const lengthOfNormalElements = Math.ceil(arr.length/amountOfInnerArrays);
    const result = [];
    //make a copy of the original array to avoid any potential side effects, as we're going to use slice operation
    const copyOfOriginalArray =[...arr];
    while(copyOfOriginalArray.length >= lengthOfNormalElements) {
        // create new array to push into results array
        const newElementToPush = copyOfOriginalArray.slice(0, lengthOfNormalElements);
        result.push(newElementToPush)
        copyOfOriginalArray.splice(0,lengthOfNormalElements);
    }
    // add remaining items to the results array
    copyOfOriginalArray.length?result.push(copyOfOriginalArray) : null;

    return result;
}
// tests
// console.log(groupArrayElements([1, 2, 3, 4, 5,6,7,8,9,10,11,12,13], 3))
// console.log(groupArrayElements([1, 2, 3, 4, 5,6,7,8,9,10,11,12,13], 7))
// console.log(groupArrayElements([1, 2, 3, 4, 5], 3))
// console.log(groupArrayElements([1, 2, 3, 4, 5,6,7], 1))
// console.log(groupArrayElements([1, 2, 3, 4, 5,6,7], 0))
// console.log(groupArrayElements([], 3))
