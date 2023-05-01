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