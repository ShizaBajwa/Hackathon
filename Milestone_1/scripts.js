// Select the sections to toggle
var skillsSection = document.getElementById("skills");
var workExperienceSection = document.getElementById("work-experience");
// Select the buttons
var toggleSkillsButton = document.getElementById("toggle-skills");
var toggleWorkButton = document.getElementById("toggle-work");
// Function to toggle the visibility of a section
function toggleVisibility(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
}
// Event listeners for buttons
toggleSkillsButton.addEventListener("click", function () { return toggleVisibility(skillsSection); });
toggleWorkButton.addEventListener("click", function () { return toggleVisibility(workExperienceSection); });
