// paints.js

import { paintColors } from './database.js';

const element = document.createElement('article');
const title = document.createElement('h2');
const select = document.createElement('select');

paintColors.forEach((color) => {
  const option = document.createElement('option');
  option.value = color.name;
  option.textContent = color.name;
  select.appendChild(option);
});

element.classList.add('paints');
element.appendChild(title);
element.appendChild(select);

function loadOptions(data) {
  select.innerHTML = '';
  data.forEach((option) => {
    const newOption = document.createElement('option');
    newOption.value = option.name;
    newOption.textContent = option.name;
    select.appendChild(newOption);
  });
}

export { element, title, loadOptions };
