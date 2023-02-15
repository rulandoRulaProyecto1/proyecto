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

function colocarBolas() {
    borrarTodo() //Primero eliminamos todas las bolas si las hay
    for (let i = 1; i <= tamañoBombo; i++) {
        $("#bolasDisponibles").append("<div class='bola'><p>" + i + "</p></div>")
    }
    $("#btnJugar").css("visibility", "visible")
    crearCarton();
}

function crearCarton() {
    //Relleno el array cartón
    for (let i = 0; i < tamañoCarton; i++) {
        let numBola = obtenerAleatorio();
        carton.push(numBola);
    }
    //Recorro el array cartón y dibujo las bolas en pantalla
    for (let key in carton) {
        $("#carton").append("<div class='bola'><p>" + carton[key] + "</p></div>")
    }
    bolasJugadas = []; //Reutilizo este array para que no se repitan los aleatorios
}

function borrarTodo() {
    //Borrar todas las bolas disponibles
    bolasJugadas = [];
    carton = [];
    let elementos = $("#bolasDisponibles").find("div");
    elementos.each(function () {
        $(this).remove()
    })
    //Borrar todas las bolas del cartón
    let elementosCarton = $("#carton").find("div");
    elementosCarton.each(function () {
        $(this).remove()
    })
}