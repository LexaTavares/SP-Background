function cargarPagina() {
    cambioColor();
}

function cambioColor() {
  $('#cambio[type="checkbox"]').on("click", function(){
            if($(this).is(":checked")){
                $("body").addClass('oscuro');
            }else if($(this).is(":not(:checked)")){
                     $("body").removeClass('oscuro');
                     $("body").addClass('claro')    
                     };
        });
};

$(document).ready(cargarPagina);