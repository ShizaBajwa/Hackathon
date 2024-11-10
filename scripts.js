var skillsSection = document.getElementById("skills");
var workExperienceSection = document.getElementById("work-experience");
var toggleSkillsButton = document.getElementById("toggle-skills");
var toggleWorkButton = document.getElementById("toggle-work");

function toggleVisibility(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
}
toggleSkillsButton.addEventListener("click", function () { return toggleVisibility(skillsSection); });
toggleWorkButton.addEventListener("click", function () { return toggleVisibility(workExperienceSection); });
