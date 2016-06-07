$('.toggle').click(function() {
    if ($(this).siblings().is(':visible')) {
        $(this).siblings().slideUp();
        $(this).siblings().find('.inner:visible').slideUp();
    } else {
        $(this).parent().parent().find('inner:visible').slideUp();
        $(this).siblings().slideToggle();
    };
});

$(document).on("ready", main);

function main(){
    $("#seemore").on("click", cambiarTexto);
}

function cambiarTexto(){
    $(this).toggleClass("port-btn-seeless");
}