/*======================================= Barra de Navegação - Scroll =======================================*/
/*================== Scroll ==================*/
window.onscroll = function () {
    navegar();
};

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>450){
            $('nav').addClass('colorNav');
        }else{
            $('nav').removeClass('colorNav');
        }
    })
});

/*================== Navegação ==================*/
function navegar() {
    $('.scrollDirect').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'swing');
    });
}

/*** Galeria ****/

$(document).ready(function () {
    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});
