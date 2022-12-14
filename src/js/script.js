/* $(document).ready(function(){
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
  }); slick-slider*/

/*   $('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    navText: ["<img src='icons/chevron-left-solid.png'>","<img src='icons/chevron-right-solid.png'>"],
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        767: {
            items:1,
            nav:true,
        },
        991:{
            items:1,
        }
    }
}) owlcarousel*/

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
	controls: false,
	navPosition: 'bottom',
    mouseDrag: true,
	responsive:{
        0:{
            items:1,
        },
        767: {
            items:1,
        },
        991:{
            items:1,
        }
    }
});

document.querySelector('.prev').addEventListener ('click', function () {
    slider.goTo('prev');
  });
document.querySelector('.next').addEventListener ('click', function () {
    slider.goTo('next');
  });