
function alerta_boton(){
    alert("Hola");
}
function alerta_div(evento){
    alert("Hola! Soy el div");
}

let div = document.getElementById("div");
div.addEventListener("click", alert("Hola! Soy el div"));
  p.onclick = alerta_div; 