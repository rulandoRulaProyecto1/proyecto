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
}