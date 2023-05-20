//ternery operator

let x = "hello"

// if(x === "hello"){
//     alert(x)
// }else{
//     alert("hey")
// }

x === "hello" ? alert(x) : alert("hey") ;
x === "hello" ? alert(x) : null ;


let arr = [45,98,35,71,26,42]

arr.forEach((e)=>{
    if(e % 2 === 0){
        console.log(e + " - zuyg");
    }else{
        console.log(e + " - kent");
    }
})

arr.forEach((e)=>{e % 2 === 0 ? console.log(e + " - zuyg") : console.log(e + " - kent")})