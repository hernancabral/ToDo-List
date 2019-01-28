//Tachar los items cuando se los clickea
//El listener se agrega sobre ul, porque existe desde del principio
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

//Eliminar los items con animacion
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut("1000", function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    //La tecla 13 corresponde a "Enter"
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        //Se crea un li agregandolo al ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
