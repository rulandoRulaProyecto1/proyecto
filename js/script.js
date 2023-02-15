function comprobarAciertos(numeroBola) {
    let numFilas = 4;
    let columnaNumeroBola = carton.indexOf(numeroBola)
    if (columnaNumeroBola != -1) {
        columnaNumeroBola = Math.floor((columnaNumeroBola) / numFilas)
    }
    let aciertos = 0
    let aciertosTotales = 0
    for (let indiceBola in carton) {
        if (bolasJugadas.includes(carton[indiceBola])) {
            aciertosTotales++;
        }
        //Mientras esté en la misma línea, voy sumando para ver si he hecho línea
        if ((bolasJugadas.includes(carton[indiceBola])) && (columnaNumeroBola == Math.floor(indiceBola / numFilas))) {
            aciertos++
            if (aciertos == 4) {
                alert("Jugador1: Linea!!!")
            }
        } else {
            aciertos = 0
        }
    }
    if (aciertosTotales == tamañoCarton) {
        alert("Jugador1: Bingo!!!")
    }
}