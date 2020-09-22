// searching array element

let arr=[3,5,77,88,45,66,9,89]
let find=10
let isFound=false
for(let i=0; i<arr.length; i++){
    if(arr[i]===find){
        console.log('Data Found at Index ' + i)
        isFound=true;
        break;
    }
}
if(!isFound){
    console.log('Data Not Found')
}