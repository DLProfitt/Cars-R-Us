// wheels.js

import { wheels } from './database.js';

const element = document.createElement('article');
const title = document.createElement('h2');
const select = document.createElement('select');

wheels.forEach((wheel) => {
  const option = document.createElement('option');
  option.value = wheel.name;
  option.textContent = wheel.name;
  select.appendChild(option);
});

element.classList.add('wheels');
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
