// // Get references to HTML elements
// const form = document.getElementById('resume-form') as HTMLFormElement;
// const nameInput = document.getElementById('name') as HTMLInputElement;
// const titleInput = document.getElementById('title') as HTMLInputElement;
// const aboutInput = document.getElementById('about') as HTMLTextAreaElement;
// const skillsInput = document.getElementById('skills') as HTMLInputElement;
// const experienceInput = document.getElementById('experience') as HTMLInputElement;
// const educationInput = document.getElementById('education') as HTMLInputElement;
// const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).files?.[0];
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
}
