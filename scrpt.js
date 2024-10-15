

$(document).ready(function () {
	$('#burger').on('click', function (e) {
		$('#menu').toggleClass('active');
	  });
  
	  $('#click-menu').on('click', function (e) {
		  $('#menu').toggleClass('active');
	  });

	$('.header__search').on('click', function (e) {
		$('#search-box').toggleClass('active');
	});

	$('#search-click').on('click', function (e) {
		$('#search-box').toggleClass('active');
	});
});



window.addEventListener('DOMContentLoaded', function() {
   
	new Swiper('.top-slider', {
		slidesPerView: 1,
	
	
		loop: true,
		// пагинация
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		// навигация
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		scrollbar:  {
			el: '.swiper-scrollbar',
		},
	});
	
	var second_swiper = new Swiper('.second-slider', {
		slidesPerView: 1,
		spaceBetween: 1000,
		loop: true,
	});

	$('.section-three__link').on('click', function (e) {
		e.preventDefault();

		var step = $(this).attr('step');
		second_swiper.slideTo(step, 500);
	});


});



document.querySelectorAll('.section-three__btn').forEach(function(tabsBtn){
	tabsBtn.addEventListener('click', function(e){
		const path = e.currentTarget.dataset.path;
		document.querySelectorAll('.section-three__btn').forEach(function(btn){
			
			btn.classList.remove('section-three__btn--active')});
			
			e.currentTarget.classList.add('section-three__btn--active');
			document.querySelectorAll('.tabs-section-three').forEach(function(tabsBtn){
				tabsBtn.classList.remove('tabs-section-three--active')});
				document.querySelector(`[data-target="${path}"]`).classList.add('tabs-section-three--active');
				
			});
		});



document.addEventListener('DOMContentLoaded', function() {
			$(".section-four-accordion").accordion({
			 collapsible: true,
			 active: false,
			 icons: false,
			 haightStyle: 'section-four__content'
			});
});