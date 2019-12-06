/*================== Scroll ==================*/
window.onscroll = function () {
    navegar();
};

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
            $('nav').addClass('colorNav');
            $('#logo').css('opacity', '1');
        }else{
            $('nav').removeClass('colorNav'); 
            $('#logo').css('opacity', '0');
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

/*================== Botões Galeria ==================*/

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

});
