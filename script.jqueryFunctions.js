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


const showDatos = function(){
    var nombre = $nombre.val();
    var apellido = $apellido.val();
    var alimentacion = $vegetarian.prop('checked') ? "Es vegetariano" : "";
    var sexo = $sexo.val();
    var estadoC = $(".estadoC:checked").val();

    limpiarDatos();
    $(".listado").append(
       "<tr>" + "<th scope="row">" + "1" + "</th>" + "<td>" + nombre + "</td>" + "<td>" + apellido +"<td>"+ "<td>" + sexo +"<td>"+ "<td>" + alimentacion +"<td>"+ "<td>" + estadoC +"<td>"+"</tr>");          
};

$(".boton").click(showDatos)