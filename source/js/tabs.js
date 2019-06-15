class Tabs{
  constructor(item){
    this.parent = item;
    this.nav = [...item.querySelectorAll('.tabs__item')];
    this.tabs = [...item.querySelectorAll('.tabs__tab')];

    this.nav.forEach((item, i) => item.addEventListener('click', () => {
      this.itter(this.nav, i);
			this.itter(this.tabs, i);
			sliders.filter(x => x.name == 'gallery').forEach(item => item.slider.init())
    }))
  }

  itter(arr, v, cls='active'){
    arr.forEach((item, i) => i == v 
      ? item.classList.add(cls) 
      : item.classList.remove(cls));
  } 
}

document.addEventListener('DOMContentLoaded', () => {
  [...document.querySelectorAll('.tabs')].forEach(item => new Tabs(item))
});