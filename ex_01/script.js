let input = document.getElementsByClassName("input")
let label = document.getElementById("label")
let notas = [];

function enviar() {
    notas = []
    Array.from(input).forEach(e => {
        notas.push(parseInt(e.value))
    });
    label.innerHTML = `A media é ${notas.reduce((a, v) => {
        return a + v;
    }) / 4}`
}
