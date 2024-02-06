let nome = "Matheus";
console.log(`O meu nome é ${nome}`);

console.log(Math.max(8, 45, 87,846,48, 451,200, 36, 489, 848));
console.log(Math.min(8, 45, 87,846,48, 451,200, 36, 489, 848));

let idade = 17;
if(idade < 18){
    console.log('Barrado')
}

if(idade >= 18){
    console.log('Liberado!')
}else{
    console.log('Barrado!')
}

let number = 10;
let number1 = 5;

//While

while (number > 0) {
    console.log(number)
    number --
};

//Do While Menos Utilizado

do {
    number1 = number1 -1;
    console.log(number1)
} while (number1 > 0);

//For Mais Utilizado

console.log("FOR")

for(let i = 0; i <= 10; i++){
    console.log(i)
}


//Switch
let number2 = 2;

switch (number2) {
    case 1:
        console.log("Esse não é o numero!")
        break;
    case 2:
        console.log("Esse é o numero!")
        break;
    default:
        console.log("numero não encontrado!")
    break;
}

//Exercicios

//01
let stri = "É string";
let num = 22;
let boo = true;

console.log(typeof (stri), typeof (num), typeof (boo));

//02
let idade1 = 18;

if(idade1 < 18){
    console.log('Não pode entrar')
}else{
    console.log('pode entrar')
}    

//03
const meuNome = 'Matheus';

if(meuNome === "Matheus"){
    console.log(`Olá ${meuNome}!`)
}else{
    console.log(`Você não é o Matheus`)
}

//04
console.log(Math.pow(2, 2));
console.log(Math.pow(3, 2));
console.log(Math.pow(18, 2));

//05
let velocimetro = 40;

if(velocimetro > 80){
    console.log('acima da velocidade permitida,  foi multado')
}else{
    console.log('Esta abaixo da velocidade permitida, não foi multado!')
}

//06
let userIdade = 30;
let cnh = false;

if(userIdade >= 18 && cnh == false){
    console.log('É maior de 18 e não possui CNH!')
}

else if(userIdade >= 18 && cnh == true){
    console.log('É maior de 18 e possui CNH!')
}

else{
    console.log('É menor de idade e não possui CNH!')
}

//07
let i = 0;

while (i <= 10) {
    console.log(i)
    i++
}

//08
for(let i = 100; i >= 50; i--){
    console.log(i)
}

//09
for(let i = 0; i <= 50; i++){
    if(i % 2 == 0){
        console.log(`Esse numero é par: ${i}`)
    }else if(i % 2 != 0){
        console.log(`Esse numero é impar: ${i} `)
    }
}

//10
// let primo = 2;

// if(primo % 2 != 0 && primo % 3 != 0){
//     console.log(`${primo}, é um numero primo!`)
// }else{
//     console.log(`${primo}, não é um numero primo!`)
// }

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const semPares = [];

for(let i = 0; i <= arr.length; i++){
    if(i % 2 !=0){
        semPares.push(i)
    }
}

console.log(semPares)   


function classificarNumero(classs){
    if(classs > 0 && classs % 2 == 0){
        return "Positivo e Par";
    }else if(classs > 0 && classs % 2 != 0){
        return "Positivo e Ímpar";
    }else if(classs < 0){
        return "Negativo";
    }else{return "Neutro";}
}

console.log(classificarNumero(1))