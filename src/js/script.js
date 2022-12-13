$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 200,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    infinite: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    arrows: false,
                    infinite: true,
                    touchMove: true
                }
            }
        ]
    });
  });