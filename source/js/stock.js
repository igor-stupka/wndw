let discounts = document.querySelectorAll('.js-discount');
let date = new Date();

discounts.forEach(discount => {
	let startArr = getDateArr(discount.dataset.start);
	let dlArr = getDateArr(discount.dataset.deadline);
	let start = normaliser(startArr);
	let deadline = normaliser(dlArr);
	let res = daysDifferent(deadline, date);
	let difference = daysDifferent(deadline, start);
	let percentage = 100 - Math.round(res / difference * 100);

	discount.querySelector('.js-deadline').innerHTML = res + ' ' + declOfNum(res, ['день', 'дня', 'дней']);
	discount.querySelector('.stock__progress-bar').style.width = percentage + '%'
})

function declOfNum(number, titles) {  
    let cases = [2, 0, 1, 1, 1, 2];  
    return titles[(number%100>4&&number%100<20)?2:cases[(number%10<5)?number%10:5]];  
}

function getDateArr(str) {  
    return str.split('.').map(item=>{
		return parseInt(item)
	})
}

function normaliser(arr) {  
    return new Date(arr[2], arr[0]-1, arr[1]);
}

function daysDifferent(first, second) {  
    return Math.round((first - second) / (1000*60*60*24))
}