
function validateForm(){
  var salida_enviar =$("#salida");
	var enlace=$("#enlace");
	
  validaName();
  
  validaEmail(); 

      
  if(validaName() == true  && validaEmail()==true){
      salida_enviar.innerHTML='<p style="color:green;">Formulario Enviado Correctamente ✔</p>';
	  
	 enlace.href="app.html";
	  
	  alert("LAB-"+aleatorio(100,999));
	 
  }
  else{
     salida_enviar.innerHTML='<p style="color:red;">Llena todos los campos correctamente X </p>'; 
	 
  }
	
}
function aleatorio(a,b) {
         return Math.round(Math.random()*(b-a)+parseInt(a));
		
         }





function primMayuscula(id){
    var nombreArray = id.split("");
    var primeraLetra = nombreArray[0];
    var primeraMayus = primeraLetra.toUpperCase();
    var cortePalabra = false;
     for(var i=1;i<nombreArray.length;i++)
        {
          if(cortePalabra)
          {    
            primeraMayus += nombreArray[i].toUpperCase();
            cortePalabra = false;
          }
          else
              primeraMayus+=nombreArray[i];
          if(nombreArray[i] == " ")
              cortePalabra = true;
        }
    return primeraMayus;
} 

function validaName(){
  var name = $("#name"); 
  var isValid=false;
	var salida_name=$("#salName");
  if(name.val().length > 0 && name.val().match(/^[a-zA-Z\s]*$/) && name.val().length < 30){
    var palabra=primMayuscula(name.val());
   $("#name").val() = palabra; 
    salida_name.append("<p style='color:green; font-size:15px;' >Nombre valido ✔</p>");
    isValid=true;
  }
  else{
    salida_name.append("<p style='color:red; font-size:15px;' >Debes escribir letras en el nombre</p>");
    isValid=false;
  }   
  return isValid;
}


function validaEmail(){
  var email = $("#email");
	var salida_email=$("#salEmail");

  var isValid=false;
 if(email.val().length > 0 &&email.val().length < 50 && email.val().match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){  
    salida_email.append("<p style='color:green; font-size:15px;'>Email valido ✔</p>");
    isValid=true;
  }
  else{
    salida_email.append("<p style='color:red; font-size:15px;' >Formato Invalido, Ej: name@domain.com</p>");
    isValid=false;
  }
  return isValid;
 }









