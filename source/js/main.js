setTimeout(function() {
	new Swiper ('.js-stock__carousel', {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
		pagination: {
			el: '.stock__pagination',
			clickable: true
		}
	})
}, 300);