//Propriedades
const num = [1, 2, 3, 4, 5]
console.log(num.length)
console.log(num[1])
console.log(num[6])


const text = 'testando'
console.log(text.length)

//Métodos
const ar1 = [6, 7, 8, 9]
console.log(num.concat(ar1)) //Unir dois arrays

const text2 = "Lorem iusum Ipisum lorem"
console.log(text2.toLocaleUpperCase())
console.log(text2.toLowerCase())
console.log(text2.indexOf('m')) //Encontrar a posição de um caractere 

//Objetos
const person = {
    name: 'matheus',
    age: 28,
    job: 'developer'
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.job)
console.log(person.name.length)

//Adicionando e removendo propriedade
const car = {
    modelo: 'hb20',
    ano: 2016,
    cor: 'branco'
}
console.log(car)

car.km = 1000;
console.log(car)

delete car.modelo
console.log(car)

//Mais sobre Objetos
const 




