$(document).ready(function () {

    var fixedHeader = $('#fixed-header')
    var proyectos = $('#proyectos');

    var flecha = $('#flecha-top');


    //Funcion para el sticky header
    $(window).on('scroll', function () {

        var scrollTop = $(window).scrollTop();
        var offsetTop = proyectos.offset().top;

        if (scrollTop >= offsetTop / 2) {

            fixedHeader.css('top', 0);
        } else {
            fixedHeader.css('top', -68);
        }
    });


    //mostrar y ocultar el boton de volver arriba
    $(window).on('scroll', function () {


        var scrollTop = $(window).scrollTop();
        var offsetTop = proyectos.offset().top;

        if (scrollTop >= offsetTop / 2) {

            flecha.css('right', 0);
        } else {
            flecha.css('right', -100);
        }
    });

    //Scroll suave
    $("a.volver-arriba").on('click', function (e) {
        e.preventDefault()

        if ($(window).scrollTop != 0) {
            $('html, body').stop().animate({ scrollTop: 0 }, 1000);
        } else {

        }
    });


    $("div.volver-arriba").on('click', function (e) {
        e.preventDefault()

        if ($(window).scrollTop != 0) {
            $('html, body').stop().animate({ scrollTop: 0 }, 1000);
        }
    });

    //Scroll suave para los demas elementos de la pagina
    $("a.scroll-suave").on('click', function (e) {
        e.preventDefault()

        var offsetScroll = $($(this).attr('href')).offset().top;
        $('html, body').stop().animate({ scrollTop: offsetScroll }, 1000);
    });

}); 