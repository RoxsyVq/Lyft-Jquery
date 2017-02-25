$(document).ready(init);

function init(){
    var sali =$("#salida");
    var enlace=$("#enlace");
	
  

  $('#next').click(function(){   
  if(valName()  && valEmail()){
    $('#enlace').attr('href','app.html');
	 
  }
  else{
     sali.html("<p style='color:red;'>Llena todos los campos correctamente X <i class='glyphicon glyphicon-info-sign' style='color:red;'></i</p>"); 
	 
  }
      }); 

$('#name').keyup(valName);
$('#email').keyup(valEmail);	
}




//function mayuscula(id){
//    var nombreArray = id.split("");
//    var primeraLetra = nombreArray[0];
//    var primeraMayus = primeraLetra.toUpperCase();
//    var cortePalabra = false;
//     for(var i=1;i<nombreArray.length;i++)
//        {
//          if(cortePalabra)
//          {    
//            primeraMayus += nombreArray[i].toUpperCase();
//            cortePalabra = false;
//          }
//          else
//              primeraMayus+=nombreArray[i];
//          if(nombreArray[i] == " ")
//              cortePalabra = true;
//        }
//    return primeraMayus;
//} 

function valName(){
    var name = $("#name"); 
    var isValid=false;
    var salid=$("#salName");
    if(name.val().length > 0 && name.val().match(/^[a-zA-Z\s]*$/) && name.val().length < 30){
      
        salid.html("<p style='color:green; font-size:15px;' >Nombre valido <i class='glyphicon glyphicon-ok' style='color:green;'></i></p>");
        isValid=true;
  }
        else{
            salid.html("<p style='color:red; font-size:15px;' >Debes escribir letras en el nombre <i class='glyphicon glyphicon-info-sign' style='color:red;'></i></p>");
            isValid=false;
          }   
  return isValid;
}


function valEmail(){
    var email = $("#email");
    var salida=$("#salEmail");
    var isValid=false;
 if(email.val().length > 0 &&email.val().length < 50 && email.val().match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){  
    salida.html("<p style='color:green; font-size:15px;'>Email valido <i class='glyphicon glyphicon-info-sign' style='color:red;'></i></p>");
    isValid=true;
  }
  else{
    salida.html("<p style='color:red; font-size:15px;' >Formato Invalido, Ej: name@domain.com <i class='glyphicon glyphicon-ok' style='color:green;'></i></p>");
    isValid=false;
  }
  return isValid;
 }









