class Tabs {
  constructor(item) {
    this.parent = item;
    this.nav = [...item.querySelectorAll('.js-tabs__item')];
    this.tabs = [...item.querySelectorAll('.js-tabs__tab')];

    this.nav.forEach((item, i) => item.addEventListener('click', () => {
      let tab = item.dataset.href.substring(1);
      let tabEl = document.getElementById(tab);

      if (tabEl) {
    	this.bindClick(this.nav, item);
		this.bindClick(this.tabs, tabEl);
      } else {
      	console.log('target not found')
      }
    }))
  } 
  bindClick(arr, el, cls='active') {
  	arr.forEach(itm => itm.classList.remove(cls));
  	el.classList.add(cls);
  }
}

[...document.querySelectorAll('.js-tabs')].forEach(item => new Tabs(item));
