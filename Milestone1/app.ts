// Select the button and the skills section
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Add event listener to toggle visibility
toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills Section';
    } else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills Section';
    }
});