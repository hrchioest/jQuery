 /*
 1- al hacer click en el boton tiene que guardar datos en el array.
 2- los input tienen que estar llenos para guardarse.
 3- los datos tienen que guardarse en el listado
 4- Despues de cargar los datos limpiar.
**/
const $nombre = $(".nombre");
const $apellido = $(".apellido");
const $select = $("#sexo option:selected")
const limpiarDatos = () => {
    $nombre.val("");
    $apellido.val("");
    $select.text("");
}

const showDatos =() =>{
    const nombre = $nombre.val();
    const apellido = $apellido.val();
    const select = $select.text();
  
    if(!nombre || !apellido){
        return;
    }

    limpiarDatos();
    $(".listado").append(`<li>${nombre} ${apellido} ${select}</li>`);
}

$(".boton").click(showDatos)

