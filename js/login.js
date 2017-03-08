$(document).ready(init)

function init(){
    var imghtml=$("#imgc");
    var codigo=$(".cod");
    var jalarimg=localStorage.getItem("loimage");
    var callCod=localStorage.getItem("codigo");	
        imghtml.attr({'src':jalarimg});
        codigo.text(callCod);

  $('#numphone').keyup(valInput);
  $('#next').click(valButon);
  
    
}

var group =$('#salida');
 


function valInput(){
var numNombre=/[0-9]/g;
var input=$('#numphone').val();
var valido=false;
    
    if(input.length>=9 && input.length<=9){
      group.html('<p class="text-center" style="color:green;"> numero Valido <i class="glyphicon glyphicon-ok" style="color:green;"></i></p>'); 
    valido=true;
        
    }
   
    else{
        group.html('<p class="text-center" style="color:red;">Nùmero Invalido, ingrese los digitos correctos <i class="glyphicon glyphicon-info-sign" style="color:red;"></i></p>'); 
       valido=false;
    }
return valido;
}

function valButon(){
  
   if(valInput()){
      alerta();
       return true;
  }
    else{
        alerta("hhhhh");
    }
    
}
     
        
       
 

       
function aleatorio(a,b) {
      return Math.round(Math.random()*(b-a)+parseInt(a));
       }
 
function alerta(){
     
    var codigo= "LAB-"+aleatorio(100,999);
		localStorage.setItem('codigoLab',codigo);
       
	    alertify.confirm('Bienvenida!! ', 'Tu Codigo es:' + codigo,
            function(){ window.location="login2.html"; }
            , function(){ alertify.error('Cancel')});
             
        // 

         
}


/*function  getCodigo()
{
	if(validaLongitud())
	{
		var codigo= "LAB-"+Math.floor(getRandom(999,100));
		localStorage.setItem('codigoLab',codigo);
	    alert("su codigo es: "+codigo);
	    window.location="sign-up2.html";
	}
	else
	{
		$('#numero').focus();
		$('#numero').val('');
	}	
}

/*function validateNumber(_evt){
    
    number = window.event.keyCode;


    if((number>=48 && number<=57)|| number==8 || number==32){
            
    } else {
        
        _evt.preventDefault();
    }     
} 


//function valInput3(){
//    var input=$('#enviar');
//    var salida=$('#salida');
//    var numNombre=/[0-9]/g;
//    if(input.val().length>8 && input.val().length<10 )
//    {
//       salida.append('<p>es valido</p>'); 
//    }
//    else{
//     salida.text('no es valido'); 
//
//    }
//
//}
// 
//function aleatorio(a,b) {
//      return Math.round(Math.random()*(b-a)+parseInt(a));
//       }
//function sent(){
//    alert("LAB-"+aleatorio(100,999));
//    enlace.href="login.html";
//}*/