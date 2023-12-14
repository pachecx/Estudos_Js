//Definindo Função
function minhaFuncao(){
    console.log('Executei a função')
}
minhaFuncao()

const fun = ()=>{
    console.log("Função dentro da variavel")
}
fun() //Função na variavel executa sem console

// Return

const a = 10;
const b = 20;

function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(5, 6))

//Escopo

let test = 10;

function tes(){
    let test = 600
    console.log(test)
}

tes()
console.log(test)
tes()

//Escopo Aninhado
let scop = 10

function escopo(){
    let ecop = 20
    if(true){
        let scop = 30
        console.log(scop)
        if(true){
        let scop = 40
        console.log(scop)
            
        if(true){
            let scop = 50
            console.log(scop)

        }
        }
    }
}

console.log(scop)
escopo()

//Arrow

const teste = ()=>{
    console.log('Funciona')
}

teste()
const raizQuadrada = (x) => x * x
console.log(raizQuadrada(4))

//Parametro Opcional
