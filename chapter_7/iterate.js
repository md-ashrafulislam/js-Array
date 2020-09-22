let obj = {
    x:10,
    y:20,
    z:30
}
// console.log('x' in obj)      //in operator
// console.log('d' in obj)

//for in loop

for(let i in obj){
    console.log(i)
    console.log(i + ':' + obj[i])
}