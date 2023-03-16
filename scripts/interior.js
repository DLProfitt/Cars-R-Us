// interior.js

import { interiors } from './database.js';

const element = document.createElement('article');
const title = document.createElement('h2');
const select = document.createElement('select');

interiors.forEach((material) => {
  const option = document.createElement('option');
  option.value = material.name;
  option.textContent = material.name;
  select.appendChild(option);
});

element.classList.add('interior');
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
