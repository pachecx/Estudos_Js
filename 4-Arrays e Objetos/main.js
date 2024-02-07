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
