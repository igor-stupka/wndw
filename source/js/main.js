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
		container: '.js-rating__swiper1',
		items: 1,
		slideBy: 'page',
		mouseDrag: true,
		swipeAngle: false,
		controls: true,
		speed: 400,
		loop: false,
		gutter: 10,
		nav: false
	});

	var rating2 = tns({
		container: '.js-rating__swiper2',
		items: 1,
		slideBy: 'page',
		mouseDrag: true,
		swipeAngle: false,
		controls: true,
		speed: 400,
		loop: false,
		gutter: 10,
		nav: false
	});


}, 100);

const serchBar = document.querySelector('#search-bar');
const lensButton = document.querySelector('#lens');
const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');
const inputSearch = document.querySelector('#searcher');
const rubrics = [...document.querySelectorAll('.nav__item--submenu')];
const goBackButton = document.querySelector('.nav__back');


const closeMenu = () => {
	burger.classList.remove('open');
	nav.classList.remove('open');
}

const closeSearch = () => {
	serchBar.classList.remove('open');
}

function goHomeNav() {
	nav.classList.remove('swiped');
	rubrics.forEach(rubric => rubric.querySelector('.nav__sm').classList.remove('active'));
}

lensButton.addEventListener('click', () => {
	serchBar.classList.toggle('open');
	inputSearch.focus();
	closeMenu();
});

burger.addEventListener('click', () => {
	document.body.classList.toggle('overflow');
	burger.classList.toggle('open');
	nav.classList.toggle('open');
	closeSearch();
	goHomeNav(); 
}); 
 
goBackButton.addEventListener('click', () => goHomeNav());

rubrics.forEach(rubric => {
	rubric.querySelector('.nav__item-caption').addEventListener('click', () => {
		nav.classList.add('swiped');
		rubric.querySelector('.nav__sm').classList.add('active');
	});
});


