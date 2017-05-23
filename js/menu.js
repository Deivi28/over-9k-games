/* Eventos para mostrar y ocultar el submenu en hover y click */

$(".menu-principal > li").hover(function () {
    $(this).children(".submenu").slideDown("fast");
}, function () {
    $(this).children(".submenu").slideUp("fast");
});


$(".menu-principal > li").click(function () {
    $(this).children(".submenu").slideToggle("fast");
});
