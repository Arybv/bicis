function validateForm(){
	/* Escribe tú código aquí */
//nombre y apellido
  nombre = document.getElementById("name").value;
  apellido = document.getElementById("lastname").value;
  correo = document.getElementById("input-email").value;
  contasenia = document.getElementById("input-password").value;

  involucra = document.getElementsByTagName("form");

var nom1 = /^[A-Z]\s+$/;
var nom2 = /^[a-z]\s+$/;
  if(nom1.test(nombre)){
    alert("si");
  }else if(nom2.test(nombre)){
    alert("si");
  }else {
    alert("no");
  }

//  if(nombre==null||nombre.length==0|| /^[A-Z]\s+$/.test(nombre)){
//    alert("ERROR - Complete su nombre!")
//    return false;


/*
  else if(apellido==null||apellido.length==0|| /^\s+$/.test(apellido)){
    alert("ERROR - Complete su apellido!");
    return false;
  }

  else if(correo==null||correo.length==0|| /^\s+$/.test(correo)){
    alert("ERROR - Complete su correo!");

    return false;
  }

  else if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(contasenia))){
    alert("ERROR - Complete su contraseña");
    return false;
  }


*/
/*
  var f = document.getElementsByTagName('form');

    f.onsubmit = function(){
      var er1 = /^[a-z]{3,}$/;
      var rta1 = er1.test(n.value);

      var er2 = /^[a-z]{3,}$/;
      var rta2 = er2.test(a.value);

      if(rta1, rta2 == false){
        alert('coloca rangos de A a Z');
        return false;
      }
    }
*/
/*
  var cadena = "Aquí colocaremos datos de la valizacion";
  var nombre = new RegExp([A-Z]);
  var apellido = new RegExp([A-Z]);

  var rta1 = nombre.test(nombre);
  var rta2 = apellido.test(apellido); */

//password -6 y !=123456 && 098754
//dificultades
//sin error

}
