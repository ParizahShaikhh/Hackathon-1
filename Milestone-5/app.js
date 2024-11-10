"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var html2pdf = require("html2pdf.js");
// Initial resume data
var resumeData = {
    name: '',
    title: '',
    about: '',
    skills: [],
    experience: [],
    education: [],
    projects: [],
    profilePicture: null,
};
// Form submission listener to generate resume
document.getElementById('resume-form').addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var about = document.getElementById('about').value;
    var skills = document.getElementById('skills').value.split(',');
    var experience = document.getElementById('experience').value.split(',');
    var education = document.getElementById('education').value.split(',');
    var projects = document.getElementById('projects').value.split(',');
    var profilePicture = ((_a = document.getElementById('profilePicture').files) === null || _a === void 0 ? void 0 : _a[0]) || null;
    resumeData = { name: name, title: title, about: about, skills: skills, experience: experience, education: education, projects: projects, profilePicture: profilePicture };
    displayResume(resumeData);
});
// Function to display resume and make fields editable
function displayResume(data) {
    if (data.profilePicture) {
        var reader_1 = new FileReader();
        reader_1.onload = function () { return document.getElementById('profile-picture-output').src = reader_1.result; };
        reader_1.readAsDataURL(data.profilePicture);
    }
    document.getElementById('name-output').textContent = data.name;
    document.getElementById('title-output').textContent = data.title;
    document.getElementById('about-output').textContent = data.about;
    updateEditableList('skills-output', data.skills);
    updateEditableList('experience-output', data.experience);
    updateEditableList('education-output', data.education);
    updateEditableList('projects-output', data.projects);
    addInlineEditingListeners();
}
// Helper to update list content
function updateEditableList(id, items) {
    var container = document.getElementById(id);
    container.innerHTML = '';
    items.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.textContent = item.trim();
        container.appendChild(listItem);
    });
}
// Handle PDF download
document.getElementById('download-pdf').addEventListener('click', function () {
    var resumeContent = document.body;
    var resumeOptions = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(resumeContent).set(resumeOptions).save().catch(function (error) {
        console.error('PDF generation error:', error);
    });
});
