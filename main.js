const nextIcon = '<img src="right-arrow.svg">';
const prevIcon = '<img src="previous.svg">';

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        margin: 15,
        items: 5,
        loop: true,
        nav: true,
        navText: [
            prevIcon,
            nextIcon
        ],
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            991: {
                items: 4
            },
            1200: {
                items: 4
            },
            1920: {
                items: 5
            },

        }

    });
});



$(function() {
    $('#menu').slicknav();
});
document.addEventListener("contextmenu", function(page3){
    page3.preventDefault();
});
