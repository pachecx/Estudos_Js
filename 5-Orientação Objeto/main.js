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
