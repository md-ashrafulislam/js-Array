//methods of object

let obj = {
    x:10,
    y:20,
    z:30
}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj)) //two dimensional object

/* let obj2=obj
obj2.x=50
console.log(obj,obj2) */

// copy or clone object
let obj2 = Object.assign({},obj)
    obj2.x=50
    console.log(obj,obj2)