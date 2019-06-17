class Tabs{
  constructor(item){
    this.parent = item;
    this.nav = [...item.querySelectorAll('.js-tabs__item')];
    this.tabs = [...item.querySelectorAll('.js-tabs__tab')];

    this.nav.forEach((item, i) => item.addEventListener('click', () => {
      this.itter(this.nav, i);
			this.itter(this.tabs, i);
    }))
  }

  itter(arr, v, cls='active'){
    arr.forEach((item, i) => i == v 
      ? item.classList.add(cls) 
      : item.classList.remove(cls));
  } 
}

[...document.querySelectorAll('.js-tabs')].forEach(item => new Tabs(item));
