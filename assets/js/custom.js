$(document).ready(function() {
    "use strict";

    if($('.venobox').length > 0) {
        $('.venobox').venobox(); 
    }

    if($('.banner-slide').length > 0) {
        $('.banner-slide').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            fade: true,
        });
    }

    $('.header .header-content .mobile-btn').on('click', function(e) {
        e.preventDefault();
        $('.header .header-content .menu .top').slideToggle();
    });


    $('#tab-1').on('click', function() {
        $('#content-2, #content-3').hide();
        $('#content-1').show();
    });

    $('#tab-2').on('click', function() {
        $('#content-1, #content-3').hide();
        $('#content-2').show();
    });
    $('#tab-3').on('click', function() {
        $('#content-2, #content-1').hide();
        $('#content-3').show();
    });

});

