
function cogerUnaBola(){
    let numBola = 0
    let yaJugada = false
    if (bolasJugadas.length == tamañoBombo) {
        alert("Ya no hay más bolas en el bombo")
        return false
    }
    numBola = obtenerAleatorio()
    $("#bolaSacada").html(numBola);
    return numBola
}

function obtenerAleatorio() {
    let numBola = 0
    do {
        numBola = parseInt((Math.random() * (tamañoBombo)) + 1);
        yaJugada = bolasJugadas.includes(numBola);
    } while (yaJugada == true)
    bolasJugadas.push(numBola);
    return numBola;
}