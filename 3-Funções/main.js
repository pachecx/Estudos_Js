// //Definindo Função
// function minhaFuncao(){
//     console.log('Executei a função')
// }
// minhaFuncao()

// const fun = ()=>{
//     console.log("Função dentro da variavel")
// }
// fun() //Função na variavel executa sem console

// // Return

// const a = 10;
// const b = 20;

// function soma(n1, n2) {
//     return n1 + n2
// }

// console.log(soma(5, 6))

// //Escopo

// let test = 10;

// function tes(){
//     let test = 600
//     console.log(test)
// }

// tes()
// console.log(test)
// tes()

// //Escopo Aninhado
// let scop = 10

// function escopo(){
//     let ecop = 20
//     if(true){
//         let scop = 30
//         console.log(scop)
//         if(true){
//         let scop = 40
//         console.log(scop)
            
//         if(true){
//             let scop = 50
//             console.log(scop)

//         }
//         }
//     }
// }

// console.log(scop)
// escopo()

// //Arrow

// const teste = ()=>{
//     console.log('Funciona')
// }

// teste()
// const raizQuadrada = (x) => x * x
// console.log(raizQuadrada(4))

let arrow = ()=>{
    console.log('testando uma arrow function!')
}

arrow();

//Exercicios

//01
function Relou(){
    console.log('Hello world');
}

Relou();

//02
function idade(age){
    console.log(`Você tem ${age} anos!`)
}

idade(18);
idade(10);
idade(30);

//03
function soma(a, b){
    return a + b;
}

console.log(soma(15, 25))
console.log(soma(155, 250))
console.log(soma(30, 55))

//04
function numberRandom(num1){
    return Math.floor(Math.random() * num1 ) + 1;
}

console.log(numberRandom(5));
console.log(numberRandom(15));
console.log(numberRandom(50));


//05
function maiorIdade(age1){
    if(age1 >= 18){
        console.log('Pode tirar CNH!')
    }else{
        console.log('Não pode tirar CNH!')
    }

}

maiorIdade(18);
maiorIdade(38);
maiorIdade(10);

//06
function testeTipo(tipo){
    if(typeof tipo === "number"){
        console.log('É do tipo Number!')
    }else if(typeof tipo === "string"){
        console.log("É do tipo String!")
    }else if(tipo == ""){
        console.log("Paramentro vazio!")
    }else{
        console.log("É do tipo Boolean!")
    }
}

testeTipo(5);
testeTipo('eef');
testeTipo(false);
testeTipo();

//07
function negative(num){
    return Math.abs(num)
}

console.log(negative(-5));
console.log(negative(-15));
console.log(negative(-999));

//08
function testText(text){
    if(text.length > 10){
        console.log("O texto é muito grande")
    }else{
        console.log("Texto dentro do limite")
    }
}

testText("eu");
testText("Pipopa");
testText("Amendoin torrado");

//09
function potencia(po1, po2){
    return po1 ** po2;
}

console.log(potencia(3, 2));
console.log(potencia(3, 16));
console.log(potencia(2, 20));

//10

