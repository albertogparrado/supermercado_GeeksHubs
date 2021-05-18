//VARIABLES
var carritoFin = 0



//FUNCIONES
//Drag
function allowDrop(ev) {
    ev.preventDefault();  //Quitar formato normal del html
  }
  
function drag(ev) {

    console.log('Drag Iniciado')
  }
  
 //DROP 
function drop(ev) {
    ev.preventDefault();

     let precioDrop = document.getElementById('producto').getAttribute('value');
     
     console.log('El precio del producto es: ' + precioDrop);
    
     console.log('Drop hecho');

      carritoFin = carritoFin + parseInt(precioDrop);
      console.log('El precio del carrito es: ' + carritoFin);

      document.getElementById('total').innerHTML = carritoFin

  }

//Borrar


function borrarCesta () {
  var carritoFin = 0
  document.getElementById('total').innerHTML = carritoFin
  console.log(carritoFin)
}

document.getElementById('borrar').addEventListener('click', borrarCesta);