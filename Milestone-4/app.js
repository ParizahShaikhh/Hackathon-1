// Select main fields for output
var nameOutput = document.getElementById("name-output");
var titleOutput = document.getElementById("title-output");
var aboutOutput = document.getElementById("about-output");
var skillsOutput = document.getElementById("skills-output");
var experienceOutput = document.getElementById("experience-output");
var educationOutput = document.getElementById("education-output");
// Utility function to make a single field editable
function makeEditable(element) {
    if (element.getAttribute("contentEditable") === "true")
        return; // Avoid making it editable multiple times
    var originalText = element.innerText;
    element.setAttribute("contentEditable", "true");
    element.focus();
    element.addEventListener("blur", function () {
        element.removeAttribute("contentEditable");
        element.textContent = element.innerText.trim() || originalText; // Keep original if left blank
    });
}
// Attach editable feature to individual text fields
nameOutput.addEventListener("click", function () { return makeEditable(nameOutput); });
titleOutput.addEventListener("click", function () { return makeEditable(titleOutput); });
aboutOutput.addEventListener("click", function () { return makeEditable(aboutOutput); });
experienceOutput.addEventListener("click", function () { return makeEditable(experienceOutput); });
educationOutput.addEventListener("click", function () { return makeEditable(educationOutput); });
// Handle skills list as editable items
skillsOutput.addEventListener("click", function (event) {
    var target = event.target;
    // Only handle clicks on list items to avoid re-rendering entire list
    if (target && target.tagName === "LI") {
        makeEditable(target);
    }
});
