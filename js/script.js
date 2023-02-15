/*dani*/
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