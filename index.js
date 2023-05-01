import { obj } from './keys.js';
// wrapper
const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.append(wrapper);
// header
const header = document.createElement('header');
const heading = '<h1 class="heading">RS Virtual keyboard</h1>';
header.innerHTML = heading;
wrapper.append(header);
// main
const main = document.createElement('main');
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
wrapper.append(main);
main.append(textarea);


const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
main.append(keyboard);

// footer
const footer = document.createElement('footer');
wrapper.append(footer);
const footerHeading = document.createElement('div');
footerHeading.classList.add('footer-heading');
footer.append(footerHeading);
footerHeading.textContent = 'To switch language press : ctrl+alt';

// local storage
let lan = 'eng';
let reg = 'lowerCase';

// class Keyboard
class Key {
  constructor(key, register = reg, lang = lan) {
    this.info = key;
    this.tag = document.createElement('div');
    this.register = register;
    this.lang = lang;
    this.tag.innerText = key[this.lang][this.register];
    this.keycode = key.keyCode;
    this.tag.dataset.keyCode = key.keyCode;
  }

  changeLanguage(lang) {
    this.lang = lang;
  }

  changeLayout() {
    this.tag.innerHTML = this.info[this.lang][this.register];
  }
}

// array with objects
let keys = [];

for (let i = 0; i < obj.length; i += 1) {
  let key = new Key(obj[i]);
  key.tag.classList.add('key');
  keyboard.append(key.tag);
  keys.push(key);
  if (key.tag.dataset.keyCode === 'Backspace') {
    key.tag.classList.add('backspace');
  } else if (key.tag.dataset.keyCode === 'Tab') {
    key.tag.classList.add('tab');
  } else if (key.tag.dataset.keyCode === 'Delete') {
    key.tag.classList.add('del');
  } else if (key.tag.dataset.keyCode === 'CapsLock') {
    key.tag.classList.add('caps-lock');
  } else if (key.tag.dataset.keyCode === 'Enter') {
    key.tag.classList.add('enter');
  } else if (key.tag.dataset.keyCode === 'ShiftLeft' || key.tag.dataset.keyCode === 'ShiftRight') {
    key.tag.classList.add('shift');
  } else if (key.tag.dataset.keyCode === 'MetaLeft') {
    key.tag.classList.add('window');
  } else if (key.tag.dataset.keyCode === 'Space') {
    key.tag.classList.add('space');
  } else if (key.tag.dataset.keyCode === 'AltLeft' || key.tag.dataset.keyCode === 'AltRight') {
    key.tag.classList.add('alt');
  } else if (key.tag.dataset.keyCode === 'ControlRight' || key.tag.dataset.keyCode === 'ControlLeft') {
    key.tag.classList.add('ctrl');
  }
}

// check language
let capsLock = document.querySelector('.caps-lock');
let shift = document.querySelectorAll('.shift');

// checker
let checker = {
  isCtrl: false,
  isEng: true,
  isUpper: false
};

// capslock
function capsLockchangeRegister() {
  if (!checker.isUpper) {
    keys.forEach(n => {
      n.register = 'upperCase';
      n.changeLayout();
      reg = 'upperCase';
    });
    capsLock.classList.add('pressed');
    checker.isUpper = true;
  } else {
    keys.forEach(n => {
      n.register = 'lowerCase';
      reg = 'lowerCase';
      n.changeLayout();
    });
    capsLock.classList.remove('pressed');
    checker.isUpper = false;
  }
}
