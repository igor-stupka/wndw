setTimeout(function() {

	var slider = tns({
		container: '.js-stock__tns',
		items: 3,
		slideBy: 'page',
		mouseDrag: true,
		swipeAngle: false,
		controls: false,
		speed: 400,
		loop: false,
		gutter: 30,
		navPosition: 'bottom'
	});

	var rating1 = tns({
		container: '.rating__swiper1',
		items: 1,
		slideBy: 'page',
		mouseDrag: true,
		swipeAngle: true,
		controls: true,
		speed: 400,
		loop: false,
		gutter: 10,
		nav: false
	});

	var rating2 = tns({
		container: '.rating__swiper2',
		items: 1,
		slideBy: 'page',
		mouseDrag: true,
		swipeAngle: true,
		controls: true,
		speed: 400,
		loop: false,
		gutter: 10,
		nav: false
	});


}, 100);