var navHeader = document.querySelector('.main-nav__list');
var buttonList = document.querySelector('.button-list__toggle');
var buttonOn = document.querySelector('.button-list__toggle-open');
var buttonOff = document.querySelector('.button-list__toggle-close');
var buttonClosed = document.querySelector('.button-list');

navHeader.classList.remove('main-nav__list--nojs');
buttonList.classList.remove('button-list__toggle--nojs');

buttonOn.addEventListener('click', function() {
  if (navHeader.classList.contains('main-nav__list--closed')) {
    navHeader.classList.remove('main-nav__list--closed');
    navHeader.classList.add('main-nav__list--opened');
    buttonOff.classList.remove('button-list__toggle-close--closed');
    buttonOff.classList.add('button-list__toggle-close--opened');
    buttonOn.classList.remove('button-list__toggle-close--opened');
    buttonOn.classList.add('button-list__toggle-close--closed');
    buttonClosed.classList.remove('button-list--closed');
  } else {
    navHeader.classList.add('main-nav__list--opened');
    buttonOff.classList.remove('button-list__toggle-close--closed');
    buttonOff.classList.add('button-list__toggle-close--opened');
    buttonOn.classList.remove('button-list__toggle-close--opened');
    buttonOn.classList.add('button-list__toggle-close--closed');
    buttonClosed.classList.remove('button-list--closed');
  }
});

buttonOff.addEventListener('click', function() {
  if (navHeader.classList.contains('main-nav__list--opened')) {
    navHeader.classList.remove('main-nav__list--opened');
    navHeader.classList.add('main-nav__list--closed');
    buttonOff.classList.remove('button-list__toggle-close--opened');
    buttonOff.classList.add('button-list__toggle-close--closed');
    buttonOn.classList.remove('button-list__toggle-close--closed');
    buttonOn.classList.add('button-list__toggle-close--opened');
    buttonClosed.classList.add('button-list--closed');
  } else {
    navHeader.classList.add('main-nav__list--opened');
    navHeader.classList.remove('main-nav__list--closed');
    buttonOff.classList.remove('button-list__toggle-close--opened');
    buttonOff.classList.add('button-list__toggle-close--closed');
    buttonOn.classList.remove('button-list__toggle-close--closed');
    buttonOn.classList.add('button-list__toggle-close--opened');
    buttonClosed.classList.add('button-list--closed');
  }
});
