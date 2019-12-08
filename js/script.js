/*================== Scroll ==================*/
window.onscroll = function () {
    navegar();
};

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300 && window.innerWidth >= 770) {
            $('.topnav').css('background', '#192231');
            $('#logo').css('opacity', '1');
        } else if ($(window).scrollTop() < 300 && window.innerWidth >= 770) {
            $('.topnav').css('background', 'rgba(0, 0, 0, 0.2)');
            $('#logo').css('opacity', '0');
        }
    });
});

$(document).ready(function () {
    if (window.innerWidth < 770) {
        $('.topnav').css('background', '#192231');
        $('#logo').css('opacity', '1');
    }
    $(window).resize(function () {
        if (window.innerWidth < 770) {
            $('.topnav').css('background', '#192231');
            $('#logo').css('opacity', '1');
        }
    });
});

/*================== Barra de Navegação ==================*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(document).ready(function () {
    $("#teste").click(function () {
        if ($('#icone').hasClass('fa fa-bars')) {
            $('#icone').removeClass('fa fa-bars');
            $('#icone').addClass('fas fa-times');
        } else {
            $('#icone').removeClass('fas fa-times');
            $('#icone').addClass('fa fa-bars');
        }
    });
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
