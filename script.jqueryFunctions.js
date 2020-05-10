/**
 * ES5:
 * 
 */
var $nombre = $(".nombre");
var $apellido = $(".apellido");
var $sexo = $(".sexo");
var $vegetarian = $(".vegetarian");


const limpiarDatos =function(){
    $nombre.val("");
    $apellido.val("");
    $sexo.val("");
};

const showDatos =function(){
    var nombre = $nombre.val();
    var apellido = $apellido.val();
    var vegetarian = $vegetarian.prop('checked') ? "Es vegetariano" : "";
    var sexo = $sexo.val();
    var estadoC = $(".estadoC:checked").val();

    if(!nombre || !apellido){
        return;
    }
    limpiarDatos();
    $(".listado").append("<li>"+ nombre + "  " + apellido  + "  " + sexo + "  " + vegetarian + "  " + estadoC + "</li>");
    
}

$(".boton").click(showDatos)