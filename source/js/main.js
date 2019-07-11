setTimeout(function() {

	var slider = tns({
		container: '.js-stock__tns',
		items: 1,
		slideBy: 'page',
		mouseDrag: true,
		swipeAngle: false,
		controls: false,
		speed: 400,
		loop: false,
		gutter: 30,
		navPosition: 'bottom',
		responsive: {
			600: {
				items: 2
			},
			990: {
				items: 3
			}
    	}
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

const lensButton = document.querySelector('#lens');
const serchBar = document.querySelector('#search-bar');

lensButton.addEventListener('click', () => {
	serchBar.classList.toggle('open');
});

const burger = document.querySelector('#burger');

burger.addEventListener('click', () => {
	burger.classList.toggle('open');
});
