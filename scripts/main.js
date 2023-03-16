// main.js

import { paintColors, interiors, wheels, technology } from './database.js';
import { element as paintElement, title as paintTitle, loadOptions as loadPaintOptions } from './paints.js';
import { element as interiorElement, title as interiorTitle, loadOptions as loadInteriorOptions } from './interior.js';
import { element as wheelElement, title as wheelTitle, loadOptions as loadWheelOptions } from './wheels.js';
import { element as techElement, title as techTitle, loadOptions as loadTechOptions } from './tech.js';

const mainContainer = document.querySelector('.mainContainer');

// Create header section
const headerSection = document.createElement('section');
headerSection.classList.add('header');
const headerTitle = document.createElement('h1');
headerSection.appendChild(headerTitle);

// Append child elements to main container
mainContainer.appendChild(headerSection);
mainContainer.appendChild(paintElement);
mainContainer.appendChild(interiorElement);
mainContainer.appendChild(wheelElement);
mainContainer.appendChild(techElement);

// Set text content for elements
headerTitle.textContent = 'Cars-R-Us';
paintTitle.textContent = 'Paint Color';
interiorTitle.textContent = 'Interior';
wheelTitle.textContent = 'Wheels';
techTitle.textContent = 'Technology';

// Define options for technology select element
const options = [
  { name: 'Basic Package (basic sound system)' },
  { name: 'Navigation Package (includes integrated navigation controls)' },
  { name: 'Visibility Package (includes side and rear cameras)' },
  {
    name: 'Ultra Package (includes navigation and visibility packages)',
    options: [
      { name: technology.ultraPackage.navigation },
      { name: technology.ultraPackage.visibility }
    ]
  }
];

// Load data from database
loadPaintOptions(paintColors);
loadInteriorOptions(interiors);
loadWheelOptions(wheels);
loadTechOptions(options);

// Load options for technology select element
loadTechOptions(options);
