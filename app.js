
// metod 1
let text = "my-name-is-huseyn";
// let result = text.toUpperCase().replaceAll("-", "_");
// console.log(result);

// metod 2

let textArr = text.split("-");
let f = textArr.join("_").toUpperCase();
console.log(f);

// metod 3
// let text = "hello-my-name-is-huseyn"
// function uppercase(str){
//    return str.split("-").join("_").toUpperCase()
// }
// console.log(uppercase(text))