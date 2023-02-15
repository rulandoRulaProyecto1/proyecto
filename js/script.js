let bolasJugadas = [];
let carton = [];
let tamañoCarton = 16;
let tamañoBombo = 20;

function jugar() {
    let numBola = cogerUnaBola();
    eliminarBolaSacada(numBola)
}

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

/*alberto*/
function cogerUnaBola(){

}

function obtenerAleatorio() {

}

/*fran*/
function eliminarBolaSacada(numBola) {

}

function tacharBolaSacada(numBola) {

}

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