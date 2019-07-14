class Nav{
  constructor(subitem) {
    this.subitem = subitem;
    this.menu =  this.subitem.querySelector('.js-sm');
    this.bg = document.querySelector('.js-nav-bg');

    this.menu.addEventListener('mouseover', () => this.bg.style.display = 'block');
    this.menu.addEventListener('mouseout', () => this.bg.style.display = 'none');
  }
}

[...document.querySelectorAll('.nav__item--submenu')].forEach(subitem => new Nav(subitem));
