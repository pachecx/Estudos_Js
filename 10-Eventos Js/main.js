let btn = document.querySelector(".btn");

btn.addEventListener('click', function(){
    console.log("Clicou")
})

//Remover Evento

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

function msg(){
    console.log("LoremIpsum")
}

btn1.addEventListener('click', msg)

btn2.addEventListener('click', function(){
    btn1.removeEventListener("click", msg)
})

//Evento por tecla
let btn3 = document.querySelector(".btn3");

btn3.addEventListener('dblclick', function(){
    console.log("Clicou duas vezes")
})


window.addEventListener("mousemove", function(e){
    console.log(e.x);
    console.log(e.y);
})