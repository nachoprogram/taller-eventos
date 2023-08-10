const div = document.getElementById("diverde");

div.addEventListener("click", () => {
  alert("Hola! Soy el div");
});

const button = document.getElementById("button");
button.addEventListener("click", (evento) => {
    evento.stopPropagation();
    alert("Hola!");
  });