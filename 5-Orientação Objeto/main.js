// class DogClasse{
//     constructor(nome, raca){
//         this.nome = nome
//         this.raca = raca
//     }
// }

// const newDog = new DogClasse("Geleia", "Caramelo")
// console.log(newDog)

// class Car{
//     constructor(modelo, ano){
//         this.modelo = modelo
//         this.ano = ano
//     }
// }
// const newCar = new Car("HB20", 2016)
// console.log(newCar)

// class caminhao{
//     constructor(motor, eixos){
//         this.motor = motor
//         this.eixos = eixos
//     }
// }

// const newCaminhao = new caminhao(4, 5)
// console.log(newCaminhao)

// //OVERRIDE
// class humano{
//     constructor(nome, idade){
//         this.nome = nome
//         this.idade = idade
//     }
// }
// const terraquio = new humano("Matheus", 28)
// console.log(terraquio)
// console.log(humano.prototype.idade) //Antes no prototype da Undefined

// humano.prototype.idade = "Não definida";

// console.log(humano.prototype.idade)

// //SYMBOLS EM CLASSES
// class aviao{
//     constructor(marca, turbinas){
//         this.marca = marca
//         this.turbinas = turbinas
//     }
// }
// const Aviao = new aviao("Boeing", 4)
// console.log(Aviao)

// const asas = Symbol();
// aviao.prototype[asas] = 2

// const Aviao2 = new aviao("Boeing", 4)
// console.log(Aviao2[asas])

// //GETTERS E SETTERS

// //GET exibe valor ou propriedade
// //SET alterar valor

// class Post{
//     constructor(titulo, descricao, tags){
//         this.titulo = titulo
//         this.descricao = descricao
//         this.tags = tags
//     }

//     get exibirTitulo(){
//         return `Você esta lendo: ${this.titulo}`;
//     }

//     set adicionarTags(tags){
//         const tagsArray = tags.split(", ")
//         this.tags = tagsArray
//     }
// }

// const myPost = new Post("Algum post", "É um post sobre programação");
// console.log(myPost)
// console.log(myPost.exibirTitulo)

// myPost.adicionarTags = "Programação, Javascript, PHP";
// console.log(myPost)

// //Herança
// class mamifero{
//     constructor(patas){
//         this.patas = patas;
//     }
// }

// class lobo extends mamifero{
//     constructor(patas, nome){
//         super(patas, nome);
//         this.nome = nome;
//     }
// }

// const shark = new lobo(4, "Shark");
// console.log(shark)

// //METODOS
// const dog = {
//     caramelo: function(){
//         console.log("Teste caramelo")
//     },
//     lobo: function(){
//         console.log("Teste lobo")
//     },
//     cleitinho: function(){
//         console.log("Teste cleitinho")
//     }
// }

// dog.caramelo();
// dog.lobo();
// dog.cleitinho();

// const car = {
//     nome: function(){
//         console.log("Hb20")
//     },
//     setCor: function(cor){
//         this.cor = cor;
//     }
// }

// car.nome();

// car.setCor("branco");
// console.log(car.cor);

// //PROTOTYPES

// const pessoa = {
//     mao: 2
// }

// console.log(Object.getPrototypeOf(pessoa));

// //Classes
// const cachorro = {
//     patas: 4,
//     raca: "caramelo",
//     latir: function(){
//         console.log("UI UI")
//     }
// }

// let pitBull = Object.create(cachorro);

// pitBull.latir();
// pitBull.raca = "PitBull";

// console.log(pitBull.raca);

// class Cachorro {
//     constructor(raca, patas, cor){
//         this.raca = raca;
//         this.patas = patas;
//         this.cor = cor;
//     }
// }

// let labrador = new Cachorro('Labrador', 4, 'Amarelo')

// console.log(labrador)

const cachoorro = {
    latir: function(){
        console.log('auaua')
    }
}

cachoorro.latir();

//Prototypes

const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);
console.log(pessoa.hasOwnProperty('maos'));

const pessoNova = Object.create(pessoa)
console.log(pessoNova.maos)

let dog = {
    patas: 4,
    raca: 'caramelo',
    latir: ()=>{
        console.log('auau')
    }
}

console.log(dog)

let labrador = Object.create(dog);

labrador.latir();
labrador.raca = 'labrador'

console.log(labrador.patas);
console.log(labrador.raca);

//Classes

class Car{
    constructor(motor, portas, pneus){
        this.motor = motor;
        this.portas = portas;
        this.pneus = pneus;
        this.ligar = function(){
            console.log('Ligado')
        }
    }
}

Car.prototype.bancos = 5;

let truck = new Car("v12", 4, 6)

console.log(truck);
truck.ligar()

console.log(truck.bancos);





