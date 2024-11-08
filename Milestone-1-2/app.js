document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
    var skillsContentSection = document.getElementById('skillsContent');
    toggleSkillsBtn.addEventListener('click', function () {
        if (skillsContentSection.style.display === 'none') {
            skillsContentSection.style.display = 'block';
            toggleSkillsBtn.textContent = 'Hide Skills';
        }
        else {
            skillsContentSection.style.display = 'none';
            toggleSkillsBtn.textContent = 'Show Skills';
        }
    });
});
