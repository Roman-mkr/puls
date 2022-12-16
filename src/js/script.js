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

(function($) {
$(function() {
	
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
	$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});
	
});

	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

})(jQuery);