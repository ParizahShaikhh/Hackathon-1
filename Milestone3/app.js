"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Select the button and the skills section
const toggleButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');
// Add event listener to toggle visibility
toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills Section';
    }
    else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills Section';
    }
});
