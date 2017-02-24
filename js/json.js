

$(document).ready(function(){
	var objetoJson='[{"nombre":"Canadá","imge":"img/arg.png","codigo":"+1"},'+
		'{"nombre":" Estados Unidos","imge":"img/eeuu.jpg","codigo":"+1"},'+
		'{"nombre":"Islas Malvina","imge":"img/islas.png",	"codigo":"+500"},'+
		'{"nombre":"Perú",	"imge":"img/pe.png",	"codigo":"+51"},'+
		'{"nombre":"Argentina",	"imge":"img/arg.png",	"codigo":"+54"},'+
		'{"nombre":"Brasil","imge":"img/brasil.png",	"codigo":"+55"},'+
		'{"nombre":"Chile",	"imge":"img/chile.png",	"codigo":"+56"},'+
		'{"nombre":"Colombia",	"imge":"img/colo.png",	"codigo":"+57"},'+
		'{"nombre":"Italia",	"imge":"img/italia.png",	"codigo":"+108"}]';

var obj=$.parseJSON(objetoJson);
var lista=$('#chat-list');
$.each(obj,function(){
	var html='<a href="datos.html"><li class="lista " id="country-list"><div class="avatar"><img id="imgc" src='+this['imge']+' class="wh-44"><h4 class="w-contact-name" id="nameCountry"> '+this['nombre'] +'</h4><span id="cod" style="display:none">'+this['codigo'] +'</span></div></li></a>';
	   lista.append(html);
	
});
	var lista=$('li');
	lista.each(function(){
		$(this).on('click',calList)
		
	});
	
	function calList(evt){
	var imagen=$(evt.currentTarget).find("#image-country").attr('src');
	var cod=$(evt.currentTarget).find("#cod").text();

	
	
	localStorage.setItem("loimage",imagen);
	localStorage.setItem("codigo",codCountry);
	
}
	
});
//$(document).ready(init);



/*var listaPaises=document.getElementById("chat-list");
var objetoJson='[{"nombre":"Canadá","imge":"img/canada.jpg","codigo":"+1"},'+
		'{"nombre":" Estados Unidos","imge":"img/eeuu.jpg","codigo":"+1"},'+
		'{"nombre":"Islas Malvina","imge":"img/islas.png",	"codigo":"+500"},'+
		'{"nombre":"Perú",	"imge":"img/pe.png",	"codigo":"+51"},'+
		'{"nombre":"Argentina",	"imge":"img/arg.png",	"codigo":"+54"},'+
		'{"nombre":"Brasil","imge":"img/brasil.png",	"codigo":"+55"},'+
		'{"nombre":"Chile",	"imge":"img/chile.png",	"codigo":"+56"},'+
		'{"nombre":"Colombia",	"imge":"img/colo.png",	"codigo":"+57"},'+
		'{"nombre":"Italia",	"imge":"img/italia.png",	"codigo":"+108"}]';

var country =JSON.parse(objetoJson);
var longt= country.length;
console.log(country[0].imge);
	
for( var i=0 ; i<longt;i++){
var paises='<a href="datos.html"><li class="lista avatar" id="country-list">'+
  			'<div class="avatar">'+
			'<img class="wh-44 image-country" id="imgc" src='+country[i].imge+'>'+
			'<h4 class="w-contact-name">'+country[i].nombre+'</h4>'+
			'<span id="cod">'+country[i].codigo+'</span>'+
  			'</div>'+		
  			'</li> </a>';
	console.log(paises);
	listaPaises.innerHTML+=paises;
	}

var  list=document.getElementsByTagName("li");

for(var j =0; j<list.length;j++){
	 list[j].addEventListener("click",onfuncion)
}
function onfuncion(evt){
	var imagen=evt.currentTarget.getElementsByClassName("image-country")[0].src;
	console.log(imagen);
	localStorage.setItem("loimage",imagen);
	
}
	
	}*/