//Tachar los items cuando se los clickea
//El listener se agrega sobre ul, porque existe desde del principio
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

//Eliminar los items con animacion
$("ul").on("click", "li span", function(event){
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
        $("ul").append("<li><span class='bin'><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});

//Diccionarios de idioma
var spaDct = {
    lng: "Español",
    title: "To-Do List",
    placeHolder: "Add New Todo",
};

var engDct = {
    lng: "English",
    title: "Tareas",
    placeHolder: "Agregar Tarea",
};

//Traduccion
function getDct(lng) {
    switch(lng) {
        case "English":
            return spaDct;
        case "Español":
            return engDct;
    };
}

function translate(lng) {
    var idm = getDct(lng);
    $("#languageBtn").text(idm.lng);
    $("#title").text(idm.title);
    $("input").attr("placeholder", idm.placeHolder);
}

$("#stripe").on("click", "#languageBtn",function(event){
    translate($("#languageBtn").text());
    event.stopPropagation();
});
