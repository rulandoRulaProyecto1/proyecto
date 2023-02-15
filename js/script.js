/*Al pulsar el botón “Colocar Bolas” cogerá del bombo todas las bolas y las colocará en la
parte superior. Hay que tener en cuenta que el tamaño del bombo será variable, por lo
que para las pruebas pondremos por ejemplo 20 bolas y posteriormente podremos
modificar este valor a 100. Al pulsar el botón “Colocar Bolas” hará que se muestre el
botón Jugar que estaba oculto al principio.*/
function colocarBolas() {
    borrarTodo() //Primero eliminamos todas las bolas si las hay
    for (let i = 1; i <= tamañoBombo; i++) {
        $("#bolasDisponibles").append("<div class='bola'><p>" + i + "</p></div>")
    }
    $("#btnJugar").css("visibility", "visible")
    crearCarton();
}