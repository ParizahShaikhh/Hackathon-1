// interface ResumeData {
//     name: string;
//     title: string;
//     about: string;
//     skills: string[];
//     experience: string[];
//     education: string[];
//     projects: string[];
//     profilePicture: File | null;
// }
// Initial resume data
var resumeData = {
    name: '',
    title: '',
    about: '',
    skills: [],
    experience: [],
    education: [],
    profilePicture: null,
};
// Form submission listener to generate resume
document.getElementById('resume-form').addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Capture form data
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var about = document.getElementById('about').value;
    var skills = document.getElementById('skills').value.split(',');
    var experience = document.getElementById('experience').value.split(',');
    var education = document.getElementById('education').value.split(',');
    var profilePicture = ((_a = document.getElementById('profilePicture').files) === null || _a === void 0 ? void 0 : _a[0]) || null;
    // Update resumeData object
    resumeData = { name: name, title: title, about: about, skills: skills, experience: experience, education: education, profilePicture: profilePicture };
    // Display resume
    displayResume(resumeData);
});
// Function to display resume and make fields editable
function displayResume(data) {
    // Profile Picture
    if (data.profilePicture) {
        var reader_1 = new FileReader();
        reader_1.onload = function () { return document.getElementById('profile-picture-output').src = reader_1.result; };
        reader_1.readAsDataURL(data.profilePicture);
    }
    // Set content with inline editing
    document.getElementById('name-output').textContent = data.name;
    document.getElementById('title-output').textContent = data.title;
    document.getElementById('about-output').textContent = data.about;
    updateEditableList('skills-output', data.skills);
    updateEditableList('experience-output', data.experience);
    updateEditableList('education-output', data.education);
    // Add listeners for inline editing
    addInlineEditingListeners();
}
// Helper to update list content
function updateEditableList(id, items) {
    var container = document.getElementById(id);
    container.innerHTML = '';
    items.forEach(function (item) {
        var listItem = document.createElement('div');
        listItem.textContent = item;
        container.appendChild(listItem);
    });
}
// Add inline editing listeners to dynamically update resumeData
function addInlineEditingListeners() {
    document.getElementById('name-output').addEventListener('input', function (e) {
        resumeData.name = e.target.textContent || '';
    });
    document.getElementById('title-output').addEventListener('input', function (e) {
        resumeData.title = e.target.textContent || '';
    });
    document.getElementById('about-output').addEventListener('input', function (e) {
        resumeData.about = e.target.textContent || '';
    });
    // Inline edits for lists
    document.getElementById('skills-output').addEventListener('input', function (e) {
        resumeData.skills = parseListContent('skills-output');
    });
    document.getElementById('experience-output').addEventListener('input', function (e) {
        resumeData.experience = parseListContent('experience-output');
    });
    document.getElementById('education-output').addEventListener('input', function (e) {
        resumeData.education = parseListContent('education-output');
    });
}
// Helper to parse contenteditable list content back into an array
function parseListContent(id) {
    var container = document.getElementById(id);
    return Array.from(container.children).map(function (child) { return child.textContent || ''; });
}
// Wait for the DOM to fully load before accessing elements
document.addEventListener("DOMContentLoaded", function () {
    // Select the button element by its ID
    var generateResumeButton = document.getElementById("generateResume");
    // Add event listener to the button
    generateResumeButton.addEventListener("click", function (event) {
        // Prevent the form submission (if wrapped inside a form)
        event.preventDefault();
        // Call a function to generate the resume
        generateResume();
    });
    // Function to generate the resume (custom logic goes here)
    function generateResume() {
        console.log("Resume generation started...");
        // Add your resume generation logic here, such as collecting form data
        // or creating a resume PDF dynamically.
        alert("Resume Generated!"); // Just an example message for now
    }
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    if (typeof html2pdf === 'undefined') {
        alert('Error: html2pdf library is not loaded.');
        return;
    }
    var resumeOptions = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    // Generate and download PDF
    html2pdf()
        .from(resumeContent)
        .set(resumeOptions)
        .save()
        .catch(function (error) {
        console.error('PDF generation error:', error);
    });
});
// Select HTML elements
var imageInput = document.getElementById('imageInput');
var imageDisplay = document.getElementById('imageDisplay');
var resetButton = document.getElementById('resetButton');
var grayscaleButton = document.getElementById('grayscaleButton');
// Event listener for the image input
imageInput.addEventListener('change', function (event) {
    var _a;
    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target) {
                imageDisplay.src = e.target.result;
                imageDisplay.style.display = 'block';
            }
        };
        reader.readAsDataURL(file);
    }
});
// Event listener for the reset button
resetButton.addEventListener('click', function () {
    imageDisplay.src = '';
    imageDisplay.style.display = 'none';
    imageInput.value = '';
});
// Event listener for the grayscale button
grayscaleButton.addEventListener('click', function () {
    if (imageDisplay.style.filter === 'grayscale(100%)') {
        imageDisplay.style.filter = 'none';
    }
    else {
        imageDisplay.style.filter = 'grayscale(100%)';
    }
});
// Event listener for form submission
document.getElementById('resume-form').addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var about = document.getElementById('about').value;
    var skills = document.getElementById('skills').value.split(',');
    var experience = document.getElementById('experience').value.split(',');
    var education = document.getElementById('education').value.split(',');
    var profilePicture = document.getElementById('profilePicture').files ? (_a = document.getElementById('profilePicture').files) === null || _a === void 0 ? void 0 : _a[0] : null;
    // Create Resume Data Object
    var resumeData = {
        name: name,
        title: title,
        about: about,
        skills: skills.map(function (skill) { return skill.trim(); }),
        experience: experience.map(function (exp) { return exp.trim(); }),
        education: education.map(function (edu) { return edu.trim(); }),
        profilePicture: profilePicture,
    };
    // Call function to display the resume data
    displayResume(resumeData);
});
// Function to display the dynamic resume content
function displayResume(data) {
    // Set Profile Picture
    if (data.profilePicture) {
        var profilePicReader = new FileReader();
        profilePicReader.onload = function (e) {
            var profilePic = document.getElementById('profile-picture-output');
            profilePic.src = e.target.result;
        };
        profilePicReader.readAsDataURL(data.profilePicture);
    }
    // Set name, title, and about sections
    document.getElementById('name-output').textContent = data.name;
    document.getElementById('title-output').textContent = data.title;
    document.getElementById('about-output').textContent = data.about;
    // Update skills list
    var skillsList = document.getElementById('skills-output');
    skillsList.innerHTML = '';
    data.skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
    // Update experience section
    var experienceList = document.getElementById('experience-output');
    experienceList.innerHTML = '';
    data.experience.forEach(function (exp) {
        var div = document.createElement('div');
        div.textContent = exp;
        experienceList.appendChild(div);
    });
    // Update education section
    var educationList = document.getElementById('education-output');
    educationList.innerHTML = '';
    data.education.forEach(function (edu) {
        var div = document.createElement('div');
        div.textContent = edu;
        educationList.appendChild(div);
    });
    // Update experience section
    var projectList = document.getElementById('experience-output');
    experienceList.innerHTML = '';
    data.experience.forEach(function (exp) {
        var div = document.createElement('div');
        div.textContent = exp;
        experienceList.appendChild(div);
    });
}
