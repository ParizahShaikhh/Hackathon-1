document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".resume-section");
  
    sections.forEach((section) => {
      section.addEventListener("input", () => {
        // When a user edits a section, changes are automatically reflected in the DOM
        console.log(`Updated content in ${section.id}:`, section.innerHTML);
        
        // Optionally, save the changes to localStorage or send them to a server
        saveChanges(section.id, section.innerHTML);
      });
    });
  });
  
  function saveChanges(sectionId: string, content: string) {
    // Example function to save changes, e.g., to localStorage
    localStorage.setItem(sectionId, content);
    
    // Alternatively, send to a server
    // fetch('/saveResume', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ sectionId, content }),
    // });
  }


  function loadChanges() {
    const sections = document.querySelectorAll(".resume-section");
  
    sections.forEach((section) => {
      const savedContent = localStorage.getItem(section.id);
      if (savedContent) {
        section.innerHTML = savedContent;
      }
    });
  }
  
  // Load saved changes on page load
  loadChanges();