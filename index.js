
const button = document.querySelector(".boton");
const input_nombre = document.querySelector(".nombre");
const input_apellido = document.querySelector(".apellido");
const listado = document.querySelector(".listado");

 
 /*
 1- al hacer click en el boton tiene que guardar datos en el array.
 2- los input tienen que estar llenos para guardarse.
 3- los datos tienen que guardarse en el listado
 4- Despues de cargar los datos limpiar.
**/
const limpiarDatos = () =>{
    input_nombre.value = "";
    input_apellido.value = "";
}

const showDatos = event =>{
    let nombre = input_nombre.value;
    let apellido = input_apellido.value;

    if(!nombre || !apellido){
        return;
    }
    
    let list =[];
    list.push({
        nombre,
        apellido
    });
   
        
    list.forEach(item => {
      limpiarDatos();
        listado.innerHTML +=`<li>${item.nombre} ${item.apellido}</li>`;
       
    });
    
};

  




button.addEventListener("click", showDatos)


