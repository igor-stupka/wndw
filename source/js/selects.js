document.addEventListener('DOMContentLoaded', () => {
  let selects = [...document.querySelectorAll('select')];
  selects.forEach(select => {
    let options = [...select.querySelectorAll('option')];
    let cls = 'select';

    let new_ = document.createElement('div');
    new_.classList = [...select.classList, ...[cls]].join(' ');

    let input = document.createElement('input');
    input.name = select.name;
    input.type = 'hidden';
    input.value = options[0].closest('form') ? options[0].innerText : options[0].value;

    let arrow = document.createElement('div');
    arrow.classList.add(`${cls}__arrow`);
    arrow.innerHTML = '<div class="fas fa-chevron-down"></div>';
    arrow.onclick = () => new_.classList.toggle('opened');

    let current = document.createElement('div');
    current.classList.add(`${cls}__current`);
    let currentText = document.createElement('span');
    currentText.classList.add(`${cls}__currentText`);
    current.appendChild(currentText);
    let activeOptions = options.filter(option => option.dataset.active)
    currentText.innerText = activeOptions.length ? activeOptions[0].innerText : options[0].innerText;
    current.addEventListener('click', () => new_.classList.toggle('opened'));






    let options_ = document.createElement('div');
    options_.classList.add(`${cls}__options`);

    options.forEach(option => {
      let optionClasses = option.className

      let opt = document.createElement('div');
      opt.innerText = option.innerText;
      opt.classList.add(`${cls}__option`);
      Object.keys(option.dataset).map(key => {
        opt.dataset[key] = option.dataset[key]
        if (key == 'link'){
          opt.addEventListener('click', () => window.location = opt.dataset[key])
        }
      })
      

      if (optionClasses){
        opt.classList.add(`${optionClasses}`);
      }

      opt.onclick = () => {
        input.value = opt.closest('form') ? option.innerText : option.value;
        currentText.innerText = option.innerText;
        current.click()
      };

      options_.appendChild(opt);
    });

    [input, current, options_, arrow].forEach(item => new_.appendChild(item));
    select.parentElement.replaceChild(new_, select);
    document.addEventListener('click', (e) => {
      if (!new_.contains(e.target)) new_.classList.remove('opened');
    })
  });
});