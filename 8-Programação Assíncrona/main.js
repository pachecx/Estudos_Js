//CAll Back
console.log("1")

setTimeout(() => {
    console.log("2")
}, 3000);

console.log("3"); 

//Promisse

let p = Promise.resolve(5);

console.log("outro");

//async function

async function somar(a, b){
    return a + b;
}

somar(2, 4).then(value => console.log(value))