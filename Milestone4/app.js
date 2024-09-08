// Example of adding interactivity using TypeScript
// Fetch elements and add interactivity
var sections = document.querySelectorAll('.resume-section');
sections.forEach(function (section) {
    section.addEventListener('mouseenter', function () {
        section.classList.add('highlight');
    });
    section.addEventListener('mouseleave', function () {
        section.classList.remove('highlight');
    });
});
// Example CSS for the highlight class
var style = document.createElement('style');
style.innerHTML = "\n    .highlight {\n        background-color: #e0f7fa;\n        transition: background-color 0.3s ease;\n    }\n";
document.head.appendChild(style);
