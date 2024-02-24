"use strict" 

let opa = "teste"

console.log(opa);

//console.log()  Mostra na tela os resultados
//debugger Vai pararo codigo onde ele foi inserido!!

//TRY e CAtch

let  b = 2;

try{
    let a = 2 + 6;
}catch(e){
    console.log(e)
}

//Finally
let  c = 2;

try{
    let a = 2 + c;
}catch(e){
    console.log(e)
} finally{
    console.log("Executou!")
}