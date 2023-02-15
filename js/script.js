let bolasJugadas = [];
let carton = [];
let tamañoCarton = 16;
let tamañoBombo = 20;

function jugar() {
    let numBola = cogerUnaBola();
    eliminarBolaSacada(numBola)
}

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

function eliminarBolaSacada(numBola) {
    //Eliminar la bola sacada de las disponibles
    let listadoBolas = $("#bolasDisponibles").find("div")
    listadoBolas.each(function() {
        if ($(this).text() == numBola) {
            $(this).remove()
            tacharBolaSacada(numBola)
            return
        }
    })
}

function tacharBolaSacada(numBola) {
    let listadoBolas = $("#carton").find("div")
    let tachado = "<div id='equis'><img src='images/equis.png' alt=''></div>"
   
    listadoBolas.each(function() {
        if ($(this).text() == numBola) {
            $(this).css("background-color", "#0000FF")
            $(this).append(tachado)
            comprobarAciertos(numBola)
        }
    })

/*jose*/
function comprobarAciertos(numeroBola){

}

/*dani*/
function colocarBolas() {

}

function crearCarton() {

}

function borrarTodo() {


}