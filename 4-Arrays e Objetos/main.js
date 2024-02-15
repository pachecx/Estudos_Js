// //Propriedades
// const num = [1, 2, 3, 4, 5]
// console.log(num.length)
// console.log(num[1])
// console.log(num[6])

// const text = 'testando'
// console.log(text.length)

// //Métodos
// const ar1 = [6, 7, 8, 9]
// console.log(num.concat(ar1)) //Unir dois arrays

// const text2 = "Lorem iusum Ipisum lorem"
// console.log(text2.toLocaleUpperCase())
// console.log(text2.toLowerCase())
// console.log(text2.indexOf('m')) //Encontrar a posição de um caractere

// //Objetos
// const person = {
//     name: 'matheus',
//     age: 28,
//     job: 'developer'
// }

// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.job)
// console.log(person.name.length)

// //Adicionando e removendo propriedade
// const car = {
//     modelo: 'hb20',
//     ano: 2016,
//     cor: 'branco'
// }
// console.log(car)

// car.km = 1000;
// console.log(car)

// delete car.modelo
// console.log(car)

// //Mais sobre Objetos
// const obj = {
//     a: 'teste',
//     b: 33,
//     c: true
// }
// const obj2 = {}

// Object.assign(obj2, obj) //Copiando propiedades do primeiro para o segundo
// console.log(obj2)

// console.log(Object.keys(obj)) //Obter as chaves do objeto
// console.log(Object.keys(obj2))
// console.log(Object.keys(car))

// console.log(Object.entries(obj2)) //Obter chave e valor


// //Mutação
// const a = {
//     name: 'matheus'
// }

// const b = a;

// console.log(b)

// // delete a.name
// // console.log(b)

// delete b.name
// console.log(a);

// //Loops em Arryas
// const users = ['matheus', 'pedro', 'lucas', 'joao']
// for (let i = 0; i < users.length; i++) {
//     console.log(`Lista de usuarios: ${users[i]}`)
// };

// //Push e Pop
// const p = ['a', 'b', 'c', 'd'];
// const O = [1, 2, 3, 4, 5];
// p.push(55, 66, 100, 'Cem');   //Adiciona no final 
// console.log(p);

// O.pop()  //Remove o ultimo
// console.log(O);
// console.log(O.length);

// //Shift e UnShift
// const Z = ['a', 'b', 'c', 'd']; //Adiciona no inicio
// const X = [1, 2, 3, 4, 5];

// Z.unshift(22, 25, 'dois')
// console.log(Z)
// X.shift()
// console.log(X)

// //IndexOf LastIndexOF 
// const M = ['a', 'b', 'c', 'd', 'Z']


// console.log(M.indexOf('Z'))
// console.log(M.lastIndexOf('a'))

// //Slice
// const S = ['a', 'b', 'c', 'd', 'Z'] // Fragmentar o array em outro menor sem modificar o original
// const s = S.slice(1, 3 + 1)
// console.log(s)

// //ForEach
// const numbers = [1, 2, 3, 4, 5, 6]
// numbers.forEach((numero)=>{
//     console.log(`O numero é: ${numero}`)
// })

// const posts = [
//     {title: 'primeiro post', categoria: 'PHP'},
//     {title: 'Segundo post', categoria: 'JS'},
//     {title: 'terceiro post', categoria: 'Ruby'},
//     {title: 'quarto post', categoria: 'Java'},
// ]

// posts.forEach((post)=>{
//     console.log(`Exibir post: ${post.title}, da categoria: ${post.categoria}`)
// })

// //Includes
// const I = ['pamonha', 'geleia', 'paçoca']
// console.log(I.includes('geleia'))
// console.log(I.includes('boi'))
// console.log(I.includes('paçoca'))

// //Reverse
// const R = ['teste do testado testando 22', 50 , 'novo teste']
// console.log(R.reverse())

// //Métodos em Strings

// //TRIM
// const T = '          removendo espaçamento do texto'
// console.log(T.trim(''))

// //PadStart
// const P = '12'
// console.log(P.padStart(4,'00'))
// console.log(P.padEnd(4,'00'))

// //Split
// const stri = 'futuramente' 
// console.log(stri.split(''))

// //Join
// console.log(stri.split('').join(''))

// //Repeat
// const r = 'fumaça'
// console.log(r.repeat(12))

// //Rest Operator
// const somaInfinita = (...args) => {
//     let total = 10;

//     for (let i = 0; i < args.length; i++) {
//         total += args[i]
//     }
//     return total
// }
// console.log(somaInfinita(2, 5, 14, 45, 155))
// console.log(somaInfinita(289, 5, 144, 45, 155))
// console.log(somaInfinita(286649, 4645, 16644, 4465, 3615585))

// //For of
// const somaInfinita2 = (...args2)=>{
//     let total2 = 0;

//     for (nu of args2){
//         total2 += nu;
//     }

//     return total2;
// }
// console.log(somaInfinita2(1, 1, 5))
// console.log(somaInfinita2(21, 511, 957))
// console.log(somaInfinita2(41, 81, 58))

// //Destructuring em Objetos
// const userDetails = {
//     firstName: 'Matheus',
//     lastName: 'Pacheco',
//     job: 'Developer'
// } 

// console.log(userDetails.firstName)
// const {firstName, lastName, job} = userDetails //Criando variaveis para cada propriedade
// console.log(firstName, lastName, job)

// const {firstName: primeiroNome, lastName:ultimoNome, job: trampo } = userDetails //Renomear variaveis
// console.log(primeiroNome, ultimoNome, trampo)

// const buyCar = {
//     modelo: 'Atego',
//     marca: 'Mercedez',
//     ano: 2024
// }

// const {modelo, marca, ano} = buyCar //Criando variaveis para cada propriedade
// console.log(modelo, marca, ano)

// const { modelo: tipo, marca: fabricante, ano: fabricacao } = buyCar //Renomenado variaveis
// console.log(tipo, fabricante, fabricacao) 

// //Destructuring em Arrays
// const Ar = ['A', 'B', 'C', 'D', 'E']
// console.log(Ar)
// const [intem1, intem2, intem3, intem4, intem5] = Ar
// console.log(intem1, intem2, intem3, intem4, intem5)

//Propriedades
// const ar = [1, 2, 3, 4]
// console.log(ar, ar.length)
// console.log(ar[1])
// console.log(ar[11])

// const num = [5, 6, 7, 8]

// console.log( all = ar.concat(num)) //concat vai juntar os dois arrays
 
// const text = 'algum texto';

// console.log(text.indexOf('a')) //Encontra a posição de um caractere
// console.log(text.indexOf('l')) 
// console.log(text.indexOf('g')) 

// //OBJETOS
// const person = {
//     name: 'matheus',
//     age: 29,
//     job: 'developer'
// }

// console.log(person)
// console.log(typeof person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.job)

// //Criando e Deletando

// const car = {
//     nome: 'hb20',
//     ano: 2016,
//     cor: 'branco'
// }

// car.porta = 4
// car.fabicante = 'hyunday'
// car.cambio = 5
// car.dono = 'Matheus'

// console.log(car)

// delete  car.nome
// delete car.cambio
// delete car.ano

// console.log(car)
// console.log(car instanceof Number)
// console.log(car instanceof Object)
// console.log(car instanceof String)

let object = {
    name: 'teste1',
    age: 25
}
let object2 = {
    last: 'teste3',
    job: "developer"
}
console.log(Object.assign(object, object2));

let celular1 = {
    chip: 1.8,
    display: 'led'
}

let celular2 = {
    bateria: 5000,
    carregador: 120
}
console.log(Object.assign(celular1, celular2));

let ar = ['a', 'b', 'c', 'd', 'e']
for(let i = 0; i <= ar.length; i++){
    console.log(ar[i])
};

let ar2 = [1, 2, 3, 4, 5]
for(let i = 0; i <= ar.length; i++){
    console.log(ar2[i])
}

let testePop = [22,33, 44, 55]
console.log(testePop.pop()) //mostra apenas o elemento removido

let tes = testePop;
console.log(tes);

let testePush = ['a', 'b', 'c', 'd'] //Adicionando ao final
testePush.push(999);
console.log(testePush);
testePush.push(555, 23, 743, "ABC")
console.log(testePush);

//SHIFT E UNSHIFT

let testeShift = [1, 2, 3]
testeShift.shift()
console.log(testeShift);

testeShift.unshift(55, 66, 999)
console.log(testeShift);

//INDEXOF LASTiNDEXOF
let nome = 'matheus'
console.log(nome.indexOf('s')); // Encontrar o indice
console.log(nome.indexOf('m'));
console.log(nome.indexOf('p'));

console.log(nome.lastIndexOf('m'));

//Slice
let slice1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(slice1);

let slice2 = slice1.slice(1, 4);
console.log(slice2);

let testeSlice1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let testeSlice2 = testeSlice1.slice(3)

console.log(testeSlice2);

//ForEach
const nums = [1, 2, 3, 4, 5, 6, 7, 8]

nums.forEach(num => {
    console.log(`Numero: ${num}`)
});

let nomes = ['Matheus', 'Maria', 'jose', 'Pedro', 'Isaias', 'Moises', 'Jaco']

nomes.forEach(nome =>{
    console.log(`O nome é: ${nome}.`)
});

let mostrar = ['hb20', 'celta', 'hillux', 'motana', 'supra', 'skyline'] 
mostrar.forEach(carro =>{
    console.log(`Os carros são: ${carro}`)
})

//INCLUDES
//Procurar um elemento no array

//VAI RETORNAR TRUE OU FALSE

let mostrarIncludes = ['hb20', 'celta', 'hillux', 'motana', 'supra', 'skyline'] 
console.log(mostrarIncludes.includes("celta"));
console.log(mostrarIncludes.includes("atego"));

//REVERSE
let testeReverse = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mostrarReverse = ['hb20', 'celta', 'hillux', 'motana', 'supra', 'skyline'] 

console.log(testeReverse.reverse());
console.log(mostrarReverse.reverse());

//TRIM
//REMOVER OS ESPAÇOS DA STRING
let testeTrim = '         Matheus         Pacheco';
console.log(testeTrim);

console.log(testeTrim.trim());

//PadSTART
let testePad = '25';
console.log(testePad.padStart(14, "0"));
let testePad2 = '100';
console.log(testePad2.padStart(5, "0"));
let testePad3 = '99';
console.log(testePad3.padStart(10, 0));

//SPLIT
let frase = 'O rato roeu a roupa do rei de roma';
console.log(frase.split(" "))

let name2 = 'Matheus';
console.log(name2.split(''));

//JOIN
let testeJoin = ['M', 'a', 't', 'h', 'e', 'u', 's']
console.log(testeJoin.join(""));

//REPEAT
let testeRepetir = 'Repetir ';

console.log(testeRepetir.repeat(15));
console.log(name2.repeat(10));

//REST OPERATOR
function restTeste(...args){
    for(let i = 0; i <= args.length; i++){
        console.log(args[i])
    }
}

restTeste(10, 5, 15, 20);

//Destruturing
//Separar as propriedades em variaveis

let car = {
    nome: 'hb20',
    motor: '1.0',
    portas: '4'
}
console.log(car);

const {nome: hb20, motor: vMotor, portas:vPortas} = car;
console.log(hb20);
console.log(vMotor);
console.log(vPortas);

let aluno = {
    nome: 'Matheus',
    idade: 29,
    job: 'developer'
}

console.log(aluno);

const {nome: matheus, idade: vIdade, job: developer } = aluno;
console.log(matheus);
console.log(vIdade);
console.log(developer);

let got = {
    nome: 'godOfWar',
    ano: 2018,
    plataforma: 'ps5'
}
console.log(got);

const {nome: godOfWar, ano: Vano, plataforma: ps5} = got;
console.log(godOfWar);
console.log(Vano);
console.log(ps5);

let desArray = ['a', 'b', 'c', 'd', 'e']
console.log(desArray);

const [letra1, letra2, letra3, letra4, letra5] = desArray;
console.log(letra1);
console.log(letra2);
console.log(letra3);
console.log(letra4);
console.log(letra5);

let persons = ['matheus', 'joao', 'pedro', 'moises'];
console.log(persons);

const [nome1, nome2, nome3, nome4] = persons;
console.log(nome1);
console.log(nome2);
console.log(nome3);
console.log(nome4);

let games = ['God of War', 'GranTurismo', 'The last of Us']
const [game1, game2, game3] = games
console.log(game1);
console.log(game2);
console.log(game3);

let gameObj = {
    nome: 'theLastOfUs',
    plataforma: 'ps5',
    ano: 2013
}

const {nome: theLastOfUs, plataforma: Vrps5, ano: Vrano} = gameObj;
console.log(theLastOfUs);
console.log(Vrps5);
console.log(Vrano);

let json1 = {
    "name": "Matheus",
    "age": 29,
    "job": "developer"
}

let pessoa = {
    "game": "fifa",
    "ano": 2007,
    "tipo": "futebol"
}

let arJson = {
    "marca": "lg",
    "ano": 2024,
    "modelo": "inverter"
}

let JsonString = JSON.stringify(json1);
console.log(JsonString);

let stringJson = JSON.parse(JsonString);
console.log(stringJson);

let obj3 = {
    name: 'matheus',
    age: 29,
    job: 'developer',
    wage: 10000
}
console.log(obj3)

let {name: vname, age: age, job: job, wage: wage} = obj3
console.log(vname);
console.log(age);
console.log(job);
console.log(wage);


//Exercicios

//01
let arr1 = ['Manga', 'pera', 'banana', 'melão', 'melançia'];
console.log(arr1[1]);
console.log(arr1[3]);
console.log(arr1[4]);

//02
let teste01 = [1, 2, 3];
let teste02 = ['a', 'b', 'c', 'd'];

console.log(teste01.length);
console.log(teste02.length);

//03
let onibus = {
    rodas: 8,
    limite: 40,
    portas: 2
}

console.log(onibus);

console.log(onibus.rodas);
console.log(onibus.limite);
console.log(onibus.portas);

//04
onibus.janelas = 20;
delete onibus.rodas;

console.log(onibus.janelas);
console.log(onibus.rodas); //deletado

//05
let meuNome = ['Matheus', 'Joao', 'Pedro'];

// for(let i = 0; i <= meuNome.length; i++){
//     if(meuNome[i] === 'Matheus'){
//         console.log('Possui meu nome!')
//         console.log(meuNome[i])
//     }
   
// }

// if(meuNome.includes('Matheus') === true){
//     console.log('Possui')
// }else{
//     console.log('Não ')
// }

if(meuNome.includes('Matheus')){
    console.log('Nome encontrado!')
}else{
    console.log('Nome não encontrado!')
}

//06
let vitamina1 = ['maçã', 'banana', 'manga', 'uva', 'melancia', 'kiwi'];
let vitamina2 = ['abacaxi', 'morango', 'pera'];

function fazerVitamina(){
    if(vitamina1.length < 5){
        console.log('Poucos elementos')
    }else{
        console.log('Muitos elementos!')
    }
}

fazerVitamina();

//07
let testeloop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

for(let i = 0; i <= testeloop.length; i++){
    console.log(testeloop[i])
}

//08
let exJson = {
    "name": "matheus",
    "lastName": "pacheco cruz",
    "age": 29
}
console.log(exJson.name);
console.log(exJson.lastName);
console.log(exJson.age);

//09


//10