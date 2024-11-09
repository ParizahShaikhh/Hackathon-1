// Select main fields for output
const nameOutput = document.getElementById("name-output") as HTMLElement;
const titleOutput = document.getElementById("title-output") as HTMLElement;
const aboutOutput = document.getElementById("about-output") as HTMLElement;
const skillsOutput = document.getElementById("skills-output") as HTMLElement;
const experienceOutput = document.getElementById("experience-output") as HTMLElement;
const educationOutput = document.getElementById("education-output") as HTMLElement;

// Utility function to make a single field editable
function makeEditable(element: HTMLElement) {
    if (element.getAttribute("contentEditable") === "true") return; // Avoid making it editable multiple times

    const originalText = element.innerText;
    element.setAttribute("contentEditable", "true");
    element.focus();

    element.addEventListener("blur", () => {
        element.removeAttribute("contentEditable");
        element.textContent = element.innerText.trim() || originalText; // Keep original if left blank
    });
}

// Attach editable feature to individual text fields
nameOutput.addEventListener("click", () => makeEditable(nameOutput));
titleOutput.addEventListener("click", () => makeEditable(titleOutput));
aboutOutput.addEventListener("click", () => makeEditable(aboutOutput));
experienceOutput.addEventListener("click", () => makeEditable(experienceOutput));
educationOutput.addEventListener("click", () => makeEditable(educationOutput));

// Handle skills list as editable items
skillsOutput.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    // Only handle clicks on list items to avoid re-rendering entire list
    if (target && target.tagName === "LI") {
        makeEditable(target);
    }
});