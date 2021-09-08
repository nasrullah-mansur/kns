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

});

