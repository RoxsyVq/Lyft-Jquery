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
	var html='<a href="signup.html"><li class="lista " id="country-list"><div class="avatar"><img id="imgc" src='+this['imge']+' class="wh-44 image-country"><h4 class="w-contact-name" id="nameCountry"> '+this['nombre'] +'</h4><span id="codigo"  class="id" style="display:none">'+this['codigo'] +'</span></div></li></a>';
	   lista.append(html);
        });
    
	var lista=$('li');
	lista.each(function(){
		$(this).on('click',calList)
		
	});
});	
    
function calList(evt)
{
    var imagen=$(evt.currentTarget).find(".image-country").attr('src');
    var cod=$(evt.currentTarget).find(".id").text();



    localStorage.setItem("loimage",imagen);
    localStorage.setItem("codigo",cod);
	
}
	
