class Ratings{
  constructor(item){
    this.parent = item;
    this.prevBtn = item.querySelector('.rating__prev');
    this.nextBtn = item.querySelector('.rating__next');
    this.titles = [...item.querySelectorAll('.rating__caption')];
    this.lists = [...item.querySelectorAll('.rating__list')];
    this.active = 0;

    this.nextBtn.addEventListener('click', () => this.itter( this.chkr(++this.active) ));
    this.prevBtn.addEventListener('click', () => this.itter( this.chkr(--this.active) ));

  }

  itter(i, cls='active') {

        this.lists.forEach(item => item.classList.remove(cls))
        this.lists[i].classList.add(cls); 
        this.titles.forEach(item => item.classList.remove(cls))
        this.titles[i].classList.add(cls);

  } 

  chkr() {
    if (this.active < 0) this.active = 0 
    else if (this.active > this.lists.length - 1) this.active = this.lists.length - 1
    else this.active
    return this.active
  }
}

[...document.querySelectorAll('.rating__rating')].forEach(item => new Ratings(item));
