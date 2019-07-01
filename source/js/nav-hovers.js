class Nav{
  constructor(subitem) {
    this.subitem = subitem;
    this.menu =  this.subitem.querySelector('.js-sm');
    this.menuItems = this.menu.querySelectorAll('.js-nav-item');
    this.menuGroups = this.menu.querySelectorAll('.js-group');
    this.bg = document.querySelector('.js-nav-bg');
   
    this.subitem.addEventListener('mouseover', () => this.subitem.classList.add('hovered'));
    this.subitem.addEventListener('mouseout', () => this.subitem.classList.remove('hovered'));

    this.menu.addEventListener('mouseover', () => this.bg.style.display = 'block');
    this.menu.addEventListener('mouseout', () => this.bg.style.display = 'none');

    this.menuItems.forEach(item => {
      let link = item.dataset.group;
      item.addEventListener('mouseover', () => {
        this.hover(link, item)
      });
    });
  }

  hover(link, li) {
    this.menuGroups.forEach(group => {
      let groupName = group.getAttribute('id')

      if (groupName == link) {

        group.addEventListener('mouseover', () => {
          li.classList.add('hovered')
        });

        group.addEventListener('mouseout', () => {
          li.classList.remove('hovered')
        });

        group.style.display = 'block';

      } else {
        group.style.display = 'none';
      }
     
    });
  }
}

[...document.querySelectorAll('.js-submenu')].forEach(subitem => new Nav(subitem));
