import * as html2pdf from 'html2pdf.js';


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

// // Initial resume data
// let resumeData: ResumeData = {
//     name: '',
//     title: '',
//     about: '',
//     skills: [],
//     experience: [],
//     education: [],
//     projects: [],
//     profilePicture: null,
// };

// // Form submission listener to generate resume
// document.getElementById('resume-form')!.addEventListener('submit', function (event: Event) {
//     event.preventDefault();
    
//     // Capture form data
//     const name = (document.getElementById('name') as HTMLInputElement).value;
//     const title = (document.getElementById('title') as HTMLInputElement).value;
//     const about = (document.getElementById('about') as HTMLTextAreaElement).value;
//     const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
//     const experience = (document.getElementById('experience') as HTMLInputElement).value.split(',');
//     const education = (document.getElementById('education') as HTMLInputElement).value.split(',');
//     const projects = (document.
//     getElementById('education') as HTMLInputElement).value.split(',');
//     const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).files?.[0] || null;

//     // Update resumeData object
//     resumeData = { name, title, about, skills, experience, education, projects, profilePicture };

//     // Display resume
//     displayResume(resumeData);
// });

// // Function to display resume and make fields editable
// function displayResume(data: ResumeData): void {
//     // Profile Picture
//     if (data.profilePicture) {
//         const reader = new FileReader();
//         reader.onload = () => (document.getElementById('profile-picture-output') as HTMLImageElement).src = reader.result as string;
//         reader.readAsDataURL(data.profilePicture);
//     }

//     // Set content with inline editing
//     (document.getElementById('name-output') as HTMLElement).textContent = data.name;
//     (document.getElementById('title-output') as HTMLElement).textContent = data.title;
//     (document.getElementById('about-output') as HTMLElement).textContent = data.about;

//     updateEditableList('skills-output', data.skills);
//     updateEditableList('experience-output', data.experience);
//     updateEditableList('education-output', data.education);
//     updateEditableList('experience-output', data.projects);

//     // Add listeners for inline editing
//     addInlineEditingListeners();
// }

// // Helper to update list content
// function updateEditableList(id: string, items: string[]): void {
//     const container = document.getElementById(id) as HTMLElement;
//     container.innerHTML = '';
//     items.forEach(item => {
//         const listItem = document.createElement('div');
//         listItem.textContent = item;
//         container.appendChild(listItem);
//     });
// }

// // Add inline editing listeners to dynamically update resumeData
// function addInlineEditingListeners(): void {
//     (document.getElementById('name-output') as HTMLElement).addEventListener('input', (e) => {
//         resumeData.name = (e.target as HTMLElement).textContent || '';
//     });

//     (document.getElementById('title-output') as HTMLElement).addEventListener('input', (e) => {
//         resumeData.title = (e.target as HTMLElement).textContent || '';
//     });

//     (document.getElementById('about-output') as HTMLElement).addEventListener('input', (e) => {
//         resumeData.about = (e.target as HTMLElement).textContent || '';
//     });

//     // Inline edits for lists
//     document.getElementById('skills-output')!.addEventListener('input', (e) => {
//         resumeData.skills = parseListContent('skills-output');
//     });

//     document.getElementById('experience-output')!.addEventListener('input', (e) => {
//         resumeData.experience = parseListContent('experience-output');
//     });

//     document.getElementById('education-output')!.addEventListener('input', (e) => {
//         resumeData.education = parseListContent('education-output');
//     });

//     document.getElementById('experience-output')!.addEventListener('input', (e) => {
//         resumeData.projects = parseListContent('experience-output');
//     });

// }

// // Helper to parse contenteditable list content back into an array
// function parseListContent(id: string): string[] {
//     const container = document.getElementById(id) as HTMLElement;
//     return Array.from(container.children).map(child => child.textContent || '');
// }


// // Wait for the DOM to fully load before accessing elements
// document.addEventListener("DOMContentLoaded", () => {
//     // Select the button element by its ID
//     const generateResumeButton = document.getElementById("generateResume") as HTMLButtonElement;
  
//     // Add event listener to the button
//     generateResumeButton.addEventListener("click", (event) => {
//       // Prevent the form submission (if wrapped inside a form)
//       event.preventDefault();
  
//       // Call a function to generate the resume
//       generateResume();
//     });
  
//     // Function to generate the resume (custom logic goes here)
//     function generateResume(): void {
//       console.log("Resume generation started...");
  
//       // Add your resume generation logic here, such as collecting form data
//       // or creating a resume PDF dynamically.
      
//       alert("Resume Generated!"); // Just an example message for now
//     }
//   });
  

//   // Handle PDF download
// downloadPdfButton.addEventListener('click', () => {
//     if (typeof html2pdf === 'undefined') {
//         alert('Error: html2pdf library is not loaded.');
//         return;
//     }

//     const resumeOptions = {
//         margin: 0.5,
//         filename: 'resume.pdf',
//         image: { type: 'jpeg', quality: 1.0 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

//     // Generate and download PDF
//     html2pdf()
//         .from(resumeContent)
//         .set(resumeOptions)
//         .save()
//         .catch((error: Error) => {
//             console.error('PDF generation error:', error);
//         });
// });



// // Select HTML elements
// const imageInput = document.getElementById('imageInput') as HTMLInputElement;
// const imageDisplay = document.getElementById('imageDisplay') as HTMLImageElement;
// const resetButton = document.getElementById('resetButton') as HTMLButtonElement;
// const grayscaleButton = document.getElementById('grayscaleButton') as HTMLButtonElement;

// // Event listener for the image input
// imageInput.addEventListener('change', (event: Event) => {
//   const file = (event.target as HTMLInputElement).files?.[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       if (e.target) {
//         imageDisplay.src = e.target.result as string;
//         imageDisplay.style.display = 'block';
//       } 
//     };
//     reader.readAsDataURL(file);
//   }
// });

// // Event listener for the reset button
// resetButton.addEventListener('click', () => {
//   imageDisplay.src = '';
//   imageDisplay.style.display = 'none';
//   imageInput.value = '';
// });

// // Event listener for the grayscale button
// grayscaleButton.addEventListener('click', () => {
//   if (imageDisplay.style.filter === 'grayscale(100%)') {
//     imageDisplay.style.filter = 'none';
//   } else {
//     imageDisplay.style.filter = 'grayscale(100%)';
//   }
// });


// // Define interfaces for the form data to ensure proper typing
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

// // Event listener for form submission
// document.getElementById('resume-form')!.addEventListener('submit', function (event: Event) {
//     event.preventDefault();

//     // Get form values
//     const name = (document.getElementById('name') as HTMLInputElement).value;
//     const title = (document.getElementById('title') as HTMLInputElement).value;
//     const about = (document.getElementById('about') as HTMLTextAreaElement).value;
//     const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
//     const experience = (document.getElementById('experience') as HTMLInputElement).value.split(',');
//     const education = (document.getElementById('education') as HTMLInputElement).value.split(',');
//     const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).files ? (document.getElementById('profilePicture') as HTMLInputElement).files?.[0]: null;

//     // Create Resume Data Object
//     const resumeData: ResumeData = {
//         name,
//         title,
//         about,
//         skills: skills.map(skill => skill.trim()),
//         experience: experience.map(exp => exp.trim()),
//         education: education.map(edu => edu.trim()),
//         profilePicture,
//     };

//     // Call function to display the resume data
//     displayResume(resumeData);
// });

// // Function to display the dynamic resume content
// function displayResume(data: ResumeData): void {
//     // Set Profile Picture
//     if (data.profilePicture) {
//         const profilePicReader = new FileReader();
//         profilePicReader.onload = function (e) {
//             const profilePic = document.getElementById('profile-picture-output') as HTMLImageElement;
//             profilePic.src = e.target!.result as string;
//         };
//         profilePicReader.readAsDataURL(data.profilePicture);
//     }

//     // Set name, title, and about sections
//     (document.getElementById('name-output') as HTMLHeadingElement).textContent = data.name;
//     (document.getElementById('title-output') as HTMLHeadingElement).textContent = data.title;
//     (document.getElementById('about-output') as HTMLParagraphElement).textContent = data.about;

//     // Update skills list
//     const skillsList = document.getElementById('skills-output') as HTMLUListElement;
//     skillsList.innerHTML = '';
//     data.skills.forEach(skill => {
//         const li = document.createElement('li');
//         li.textContent = skill;
//         skillsList.appendChild(li);
//     });

//     // Update experience section
//     const experienceList = document.getElementById('experience-output') as HTMLDivElement;
//     experienceList.innerHTML = '';
//     data.experience.forEach(exp => {
//         const div = document.createElement('div');
//         div.textContent = exp;
//         experienceList.appendChild(div);
//     });

//     // Update education section
//     const educationList = document.getElementById('education-output') as HTMLDivElement;
//     educationList.innerHTML = '';
//     data.education.forEach(edu => {
//         const div = document.createElement('div');
//         div.textContent = edu;
//         educationList.appendChild(div);
//     });

//      // Update experience section
//      const projectList = document.getElementById('experience-output') as HTMLDivElement;
//      experienceList.innerHTML = '';
//      data.experience.forEach(exp => {
//          const div = document.createElement('div');
//          div.textContent = exp;
//          experienceList.appendChild(div);
//      });
// }






// // Handle PDF download
// (document.getElementById('download-pdf') as HTMLButtonElement).addEventListener('click', () => {
//     const resumeContent = document.body;
//     const resumeOptions = {
//         margin: 0.5,
//         filename: 'resume.pdf',
//         image: { type: 'jpeg', quality: 1.0 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

//     html2pdf().from(resumeContent).set(resumeOptions).save().catch(error => {
//         console.error('PDF generation error:', error);
//     });
// });





interface ResumeData {
    name: string;
    title: string;
    about: string;
    skills: string[];
    experience: string[];
    education: string[];
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
    profilePicture: null,
};

// Form submission listener to generate resume
document.getElementById('resume-form')!.addEventListener('submit', function (event: Event) {
    event.preventDefault();
    
    // Capture form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const about = (document.getElementById('about') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    const experience = (document.getElementById('experience') as HTMLInputElement).value.split(',');
    const education = (document.getElementById('education') as HTMLInputElement).value.split(',');
    const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).files?.[0] || null;

    // Update resumeData object
    resumeData = { name, title, about, skills, experience, education, profilePicture };

    // Display resume
    displayResume(resumeData);
});

// Function to display resume and make fields editable
function displayResume(data: ResumeData): void {
    // Profile Picture
    if (data.profilePicture) {
        const reader = new FileReader();
        reader.onload = () => (document.getElementById('profile-picture-output') as HTMLImageElement).src = reader.result as string;
        reader.readAsDataURL(data.profilePicture);
    }

    // Set content with inline editing
    (document.getElementById('name-output') as HTMLElement).textContent = data.name;
    (document.getElementById('title-output') as HTMLElement).textContent = data.title;
    (document.getElementById('about-output') as HTMLElement).textContent = data.about;

    updateEditableList('skills-output', data.skills);
    updateEditableList('experience-output', data.experience);
    updateEditableList('education-output', data.education);

    // Add listeners for inline editing
    addInlineEditingListeners();
}

// Helper to update list content
function updateEditableList(id: string, items: string[]): void {
    const container = document.getElementById(id) as HTMLElement;
    container.innerHTML = '';
    items.forEach(item => {
        const listItem = document.createElement('div');
        listItem.textContent = item;
        container.appendChild(listItem);
    });
}

// Add inline editing listeners to dynamically update resumeData
function addInlineEditingListeners(): void {
    (document.getElementById('name-output') as HTMLElement).addEventListener('input', (e) => {
        resumeData.name = (e.target as HTMLElement).textContent || '';
    });

    (document.getElementById('title-output') as HTMLElement).addEventListener('input', (e) => {
        resumeData.title = (e.target as HTMLElement).textContent || '';
    });

    (document.getElementById('about-output') as HTMLElement).addEventListener('input', (e) => {
        resumeData.about = (e.target as HTMLElement).textContent || '';
    });

    // Inline edits for lists
    document.getElementById('skills-output')!.addEventListener('input', (e) => {
        resumeData.skills = parseListContent('skills-output');
    });

    document.getElementById('experience-output')!.addEventListener('input', (e) => {
        resumeData.experience = parseListContent('experience-output');
    });

    document.getElementById('education-output')!.addEventListener('input', (e) => {
        resumeData.education = parseListContent('education-output');
    });

}

// Helper to parse contenteditable list content back into an array
function parseListContent(id: string): string[] {
    const container = document.getElementById(id) as HTMLElement;
    return Array.from(container.children).map(child => child.textContent || '');
}


// Wait for the DOM to fully load before accessing elements
document.addEventListener("DOMContentLoaded", () => {
    // Select the button element by its ID
    const generateResumeButton = document.getElementById("generateResume") as HTMLButtonElement;
  
    // Add event listener to the button
    generateResumeButton.addEventListener("click", (event) => {
      // Prevent the form submission (if wrapped inside a form)
      event.preventDefault();
  
      // Call a function to generate the resume
      generateResume();
    });
  
    // Function to generate the resume (custom logic goes here)
    function generateResume(): void {
      console.log("Resume generation started...");
  
      // Add your resume generation logic here, such as collecting form data
      // or creating a resume PDF dynamically.
      alert("Resume Generated!"); // Just an example message for now
    }
  });
  

  // Handle PDF download
downloadPdfButton.addEventListener('click', () => {
    if (typeof html2pdf === 'undefined') {
        alert('Error: html2pdf library is not loaded.');
        return;
    }

    const resumeOptions = {
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
        .catch((error: Error) => {
            console.error('PDF generation error:', error);
        });
});




// Select HTML elements
const imageInput = document.getElementById('imageInput') as HTMLInputElement;
const imageDisplay = document.getElementById('imageDisplay') as HTMLImageElement;
const resetButton = document.getElementById('resetButton') as HTMLButtonElement;
const grayscaleButton = document.getElementById('grayscaleButton') as HTMLButtonElement;

// Event listener for the image input
imageInput.addEventListener('change', (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target) {
        imageDisplay.src = e.target.result as string;
        imageDisplay.style.display = 'block';
      } 
    };
    reader.readAsDataURL(file);
  }
});

// Event listener for the reset button
resetButton.addEventListener('click', () => {
  imageDisplay.src = '';
  imageDisplay.style.display = 'none';
  imageInput.value = '';
});

// Event listener for the grayscale button
grayscaleButton.addEventListener('click', () => {
  if (imageDisplay.style.filter === 'grayscale(100%)') {
    imageDisplay.style.filter = 'none';
  } else {
    imageDisplay.style.filter = 'grayscale(100%)';
  }
});


// Define interfaces for the form data to ensure proper typing
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

     // Update experience section
     const projectList = document.getElementById('experience-output') as HTMLDivElement;
     experienceList.innerHTML = '';
     data.experience.forEach(exp => {
         const div = document.createElement('div');
         div.textContent = exp;
         experienceList.appendChild(div);
     });
} 