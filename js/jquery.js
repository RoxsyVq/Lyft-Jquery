$(document).ready(solicitud);

   
    function solicitud()
        {
          $.ajax({
              
          url:'https://clientes.geekadvice.pe/api/estimado', 
          data:{
              
            tipo:3
                }
        }).success(function(_data){
              console.log(_data);
              update(_data);
          });
        }

function update(_info){
    $('#destino').html(_info.destino);
    $('#origen').html(_info.origen);
    $('#min').html(_info.estimado.min);
    $('#max').html(_info.estimado.max);
    $('#moneda').html(_info.estimado.moneda);
    
    
}





 /*$('form').on('submit', function (evt) {
        evt.preventDefault();

        // Realizamos la petición
        
        $.ajax('https://clientes.geekadvice.pe/api/estimado', {
            type: 'POST',
            dataType: 'json',
            data: {
                'estimado': $('#nombre').val(),
                'origen': $('#mensaje').val(),
            }
        }).then(function (respuesta) {
            console.log(respuesta);
            $('form').children('ol').prepend($(`
                <li>
                    ${respuesta.nombre} - <small>${respuesta.fecha.weekday}</small><br>
                    ${respuesta.mensaje}
                </li>
            `));
        });
    }); */