document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
    const skillsContentSection = document.getElementById('skillsContent') as HTMLElement;

    toggleSkillsBtn.addEventListener('click', () =>{
        if (skillsContentSection.style.display === 'none') {
            skillsContentSection.style.display = 'block';
            toggleSkillsBtn.textContent = 'Hide Skills';
        } else {
            skillsContentSection.style.display = 'none';
            toggleSkillsBtn.textContent = 'Show Skills';
        }
    });
});


