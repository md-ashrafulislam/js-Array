let obj = {a:10, b:20}
    obj2={a:10, b:20}
    // console.log(obj===obj2)
    /* if(obj.a===obj2.a && obj.b===obj2.b){
        console.log(true)
    }else{
        console.log(false)
    } */

    console.log(JSON.stringify(obj) === JSON.stringify(obj2))   //string e ropantor kora 