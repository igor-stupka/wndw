"use strict";
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

document.addEventListener('DOMContentLoaded', function () {
  var selects = _toConsumableArray(document.querySelectorAll('select'));

  selects.forEach(function (select) {
    var options = _toConsumableArray(select.querySelectorAll('option'));

    var cls = 'select';
    var new_ = document.createElement('div');
    new_.classList = [].concat(_toConsumableArray(select.classList), [cls]).join(' ');
    var input = document.createElement('input');
    input.name = select.name;
    input.type = 'hidden';
    input.value = options[0].closest('form') ? options[0].innerText : options[0].value;
    var arrow = document.createElement('div');
    arrow.classList.add("".concat(cls, "__arrow"));
    arrow.innerHTML = '<div class="fas fa-chevron-down"></div>';

    arrow.onclick = function () {
      return new_.classList.toggle('opened');
    };

    var current = document.createElement('div');
    current.classList.add("".concat(cls, "__current"));
    var currentText = document.createElement('span');
    currentText.classList.add("".concat(cls, "__currentText"));
    current.appendChild(currentText);
    var activeOptions = options.filter(function (option) {
      return option.dataset.active;
    });
    currentText.innerText = activeOptions.length ? activeOptions[0].innerText : options[0].innerText;
    current.addEventListener('click', function () {
      return new_.classList.toggle('opened');
    });
    var options_ = document.createElement('div');
    options_.classList.add("".concat(cls, "__options"));
    options.forEach(function (option) {
      var optionClasses = option.className;
      var opt = document.createElement('div');
      opt.innerText = option.innerText;
      opt.classList.add("".concat(cls, "__option"));
      Object.keys(option.dataset).map(function (key) {
        opt.dataset[key] = option.dataset[key];

        if (key == 'link') {
          opt.addEventListener('click', function () {
            return window.location = opt.dataset[key];
          });
        }
      });

      if (optionClasses) {
        opt.classList.add("".concat(optionClasses));
      }

      opt.onclick = function () {
        input.value = opt.closest('form') ? option.innerText : option.value;
        currentText.innerText = option.innerText;
        current.click();
      };

      options_.appendChild(opt);
    });
    [input, current, options_, arrow].forEach(function (item) {
      return new_.appendChild(item);
    });
    select.parentElement.replaceChild(new_, select);
    document.addEventListener('click', function (e) {
      if (!new_.contains(e.target)) new_.classList.remove('opened');
    });
  });
});
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tabs =
/*#__PURE__*/
function () {
  function Tabs(item) {
    var _this = this;

    _classCallCheck(this, Tabs);

    this.parent = item;
    this.nav = _toConsumableArray(item.querySelectorAll('.tabs__item'));
    this.tabs = _toConsumableArray(item.querySelectorAll('.tabs__tab'));
    this.nav.forEach(function (item, i) {
      return item.addEventListener('click', function () {
        _this.itter(_this.nav, i);

        _this.itter(_this.tabs, i);

        sliders.filter(function (x) {
          return x.name == 'gallery';
        }).forEach(function (item) {
          return item.slider.init();
        });
      });
    });
  }

  _createClass(Tabs, [{
    key: "itter",
    value: function itter(arr, v) {
      var cls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'active';
      arr.forEach(function (item, i) {
        return i == v ? item.classList.add(cls) : item.classList.remove(cls);
      });
    }
  }]);

  return Tabs;
}();

document.addEventListener('DOMContentLoaded', function () {
  _toConsumableArray(document.querySelectorAll('.tabs')).forEach(function (item) {
    return new Tabs(item);
  });
});