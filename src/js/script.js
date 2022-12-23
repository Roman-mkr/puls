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

$(document).ready(function() {
	// modal
	$('[data-modal=modal_consult]').on('click', function() {
		$('.overlay, #modal_consult').fadeIn();
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #modal_consult, #modal_order, #modal_feedback').fadeOut();
	});
	$('.button_price').each(function (i) {
		$(this).on('click', function () {
			$('#modal_order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #modal_order').fadeIn();
		});
	});

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: "required",
				phone: {
					required: true,
					number: true,
					minlength: 10
				},
				email: {
					required: true,
	
				}
			},
			messages: {
				name: "Пожалуйста, введите свое имя",
				phone: {
					required: "Пожалуйста, введите свой номер телефона",
					number: "Введите номер цифрами без знака +",
					minlength: jQuery.validator.format("Не менее {0} символов")
				},
				email: {
					  required: "Пожалуйста, введите свой e-mail",
					  email: "Введен некорректный e-mail адрес"
				}
			  }
		});
	};
	
	validateForms('#consultation-form');
	validateForms('#modal_order form');
	validateForms('#modal_consult form');

/* 	$('input[name=phone]').mask("+7 (999) 999-99-99"); */

	$('form').submit(function(e) {
		e.preventDefault();
		if (!$(this).valid()) {
			return;
		}
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#modal_order, #modal_consult').fadeOut();
			$('.overlay, #modal_feedback').fadeIn();
			$('form').trigger('reset');
		});
		return false;
	});
});