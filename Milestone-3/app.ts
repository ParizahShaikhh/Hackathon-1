
// // Get references to HTML elements
// const form = document.getElementById('resume-form') as HTMLFormElement;
// const nameInput = document.getElementById('name') as HTMLInputElement;
// const titleInput = document.getElementById('title') as HTMLInputElement;
// const aboutInput = document.getElementById('about') as HTMLTextAreaElement;
// const skillsInput = document.getElementById('skills') as HTMLInputElement;
// const experienceInput = document.getElementById('experience') as HTMLInputElement;
// const educationInput = document.getElementById('education') as HTMLInputElement;
// const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).files?.[0];

// const nameOutput = document.getElementById('name-output') as HTMLHeadingElement;
// const titleOutput = document.getElementById('title-output') as HTMLHeadingElement;
// const aboutOutput = document.getElementById('about-output') as HTMLParagraphElement;
// const skillsOutput = document.getElementById('skills-output') as HTMLUListElement;
// const experienceOutput = document.getElementById('experience-output') as HTMLDivElement;
// const educationOutput = document.getElementById('education-output') as HTMLInputElement;
// const dynamicProfilePic = document.getElementById('profile-picture')! as HTMLImageElement;

// // Event listener for form submission
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Capture user input
//     const name = nameInput.value;
//     const title = titleInput.value;
//     const about = aboutInput.value;
//     const education = educationInput.value;
//     const skills = skillsInput.value.split(',').map(skill => skill.trim());
//     const experience = experienceInput.value.split(',').map(exp => exp.trim());
    

//     // Update the resume dynamically
//     nameOutput.textContent = name;
//     titleOutput.textContent = title;
//     aboutOutput.textContent = about;
//     educationOutput.textContent = education;
//     skillsOutput.innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');
//     experienceOutput.innerHTML = experience.map(exp =>` <p>${exp}</p>`).join('');
    
// });






// Define interfaces for the form data to ensure proper typing
interface ResumeData {
    name: string;
    title: string;
    about: string;
    skills: string[];
    experience: string[];
    education: string[];
    profilePicture: File | null;
}

// Event listener for form submission
document.getElementById('resume-form')!.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const about = (document.getElementById('about') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    const experience = (document.getElementById('experience') as HTMLInputElement).value.split(',');
    const education = (document.getElementById('education') as HTMLInputElement).value.split(',');
    const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).files ? (document.getElementById('profilePicture') as HTMLInputElement).files?.[0]: null;

    // Create Resume Data Object
    const resumeData: ResumeData = {
        name,
        title,
        about,
        skills: skills.map(skill => skill.trim()),
        experience: experience.map(exp => exp.trim()),
        education: education.map(edu => edu.trim()),
        profilePicture,
    };

    // Call function to display the resume data
    displayResume(resumeData);
});

// Function to display the dynamic resume content
function displayResume(data: ResumeData): void {
    // Set Profile Picture
    if (data.profilePicture) {
        const profilePicReader = new FileReader();
        profilePicReader.onload = function (e) {
            const profilePic = document.getElementById('profile-picture-output') as HTMLImageElement;
            profilePic.src = e.target!.result as string;
        };
        profilePicReader.readAsDataURL(data.profilePicture);
    }

    // Set name, title, and about sections
    (document.getElementById('name-output') as HTMLHeadingElement).textContent = data.name;
    (document.getElementById('title-output') as HTMLHeadingElement).textContent = data.title;
    (document.getElementById('about-output') as HTMLParagraphElement).textContent = data.about;

    // Update skills list
    const skillsList = document.getElementById('skills-output') as HTMLUListElement;
    skillsList.innerHTML = '';
    data.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Update experience section
    const experienceList = document.getElementById('experience-output') as HTMLDivElement;
    experienceList.innerHTML = '';
    data.experience.forEach(exp => {
        const div = document.createElement('div');
        div.textContent = exp;
        experienceList.appendChild(div);
    });

    // Update education section
    const educationList = document.getElementById('education-output') as HTMLDivElement;
    educationList.innerHTML = '';
    data.education.forEach(edu => {
        const div = document.createElement('div');
        div.textContent = edu;
        educationList.appendChild(div);
    });
}