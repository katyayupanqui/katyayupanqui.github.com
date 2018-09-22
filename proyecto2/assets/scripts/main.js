//alert("Hola Mundo JS");  
//console.log("Hola Mundo JS en Consola");
//DOM (Document Object model  )

//let element = document.querySelector(".fa-star);
//los objetos dentro del MOD  se conocen como NODOS


let elementList = document.querySelectorAll(".fa-star");

 elementList.forEach(function(element){
    element.addEventListener('click', function(){
        alert("Estrellita Clickeada");
        element.classList.remove("far");
        element.classList.add("fas");

    })
 });

//eventos

let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");

closes.forEach(function(close){
    close.addEventListener('click',function(ev){
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("fadeInRight");
        content.classList.add("animated");
        content.classList.add("fadeOutRight");
        setTimeout(() => {
            location.href="/";
        }, 1000);
    })

})
