import * as html2pdf from 'html2pdf.js';
interface ResumeData {
    name: string;
    title: string;
    about: string;
    skills: string[];
    experience: string[];
    education: string[];
    projects: string[];
    profilePicture: File | null;
}

// Initial resume data
let resumeData: ResumeData = {
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
document.getElementById('resume-form')!.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const about = (document.getElementById('about') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    const experience = (document.getElementById('experience') as HTMLInputElement).value.split(',');
    const education = (document.getElementById('education') as HTMLInputElement).value.split(',');
    const projects = (document.getElementById('projects') as HTMLInputElement).value.split(',');
    const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).files?.[0] || null;

    resumeData = { name, title, about, skills, experience, education, projects, profilePicture };

    displayResume(resumeData);
});

// Function to display resume and make fields editable
function displayResume(data: ResumeData): void {
    if (data.profilePicture) {
        const reader = new FileReader();
        reader.onload = () => (document.getElementById('profile-picture-output') as HTMLImageElement).src = reader.result as string;
        reader.readAsDataURL(data.profilePicture);
    }

    (document.getElementById('name-output') as HTMLElement).textContent = data.name;
    (document.getElementById('title-output') as HTMLElement).textContent = data.title;
    (document.getElementById('about-output') as HTMLElement).textContent = data.about;

    updateEditableList('skills-output', data.skills);
    updateEditableList('experience-output', data.experience);
    updateEditableList('education-output', data.education);
    updateEditableList('projects-output', data.projects);

    addInlineEditingListeners();
}

// Helper to update list content
function updateEditableList(id: string, items: string[]): void {
    const container = document.getElementById(id) as HTMLElement;
    container.innerHTML = '';
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.trim();
        container.appendChild(listItem);
    });
}

// Handle PDF download
(document.getElementById('download-pdf') as HTMLButtonElement).addEventListener('click', () => {
    const resumeContent = document.body;
    const resumeOptions = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(resumeContent).set(resumeOptions).save().catch(error => {
        console.error('PDF generation error:', error);
    });
});
