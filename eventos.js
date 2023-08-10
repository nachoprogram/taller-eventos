
function alerta_div(evento){
    alert("Hola! Soy el div");
}

let div = document.getElementById("div");
div.addEventListener("click", function(){
    alert("Hola! Soy el div");
});