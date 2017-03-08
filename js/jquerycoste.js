$(document).ready(solicitud);

   
    function solicitud()
        {
          $.ajax({
              
          url:'https://clientes.geekadvice.pe/api/carrera', 
          data:{
              
            tipo:2
                }
        }).success(function(_data){
              console.log(_data);
              update(_data);
          });
        }

function update(_info){
    $('#avatarcod').attr('src',_info.conductor.url);
    $('#nombrecond').html(_info.conductor.name);
    $('#final').html(_info.final);
    $('#money').html(_info.estimado.moneda);
   
    
    
    
}