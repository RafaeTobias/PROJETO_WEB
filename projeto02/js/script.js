var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input")
var buttontElement = document.querySelector("#app button")


var tarefas = JSON.parse(localStorage.getItem("list")) || [];

function renderTarefas() {
    listElement.innerHTML = ""
}

