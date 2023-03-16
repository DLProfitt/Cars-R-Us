// tech.js

import { technology } from './database.js';

const element = document.createElement('article');
const title = document.createElement('h2');
const select = document.createElement('select');

const options = [
  { name: 'Basic Package (basic sound system)' },
  { name: 'Navigation Package (includes integrated navigation controls)' },
  { name: 'Visibility Package (includes side and rear cameras)' },
  { name: 'Ultra Package (includes navigation and visibility packages)' }
];

options.forEach((option) => {
  const newOption = document.createElement('option');
  newOption.value = option.name;
  newOption.textContent = option.name;
  select.appendChild(newOption);
});

element.classList.add('tech');
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
