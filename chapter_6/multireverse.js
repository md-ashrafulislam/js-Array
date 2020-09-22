//Multidimensional Array

/* let arr=[
    [80,75,86,90],
    [74,81,88,78],
    [83,71,77,76]
] */
// console.log(arr[0][0])
// console.log(arr[1][1])

/* for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        console.log('element ' + i + ' : ' + arr[i][j])
    }
} */

//Reverse in array

let arr=[1,2,3,4,5,6,7,8]

/* for(let i=0; i<(arr.length/2); i++){
    let temp=arr[i]
    arr[i]=arr[arr.length - 1 - i]
    arr[arr.length - 1 - i]=temp
    
} */
console.log(arr.reverse())