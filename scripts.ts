const skillsSection = document.getElementById("skills")!;
const workExperienceSection = document.getElementById("work-experience")!;
const toggleSkillsButton = document.getElementById("toggle-skills")!;
const toggleWorkButton = document.getElementById("toggle-work")!;

function toggleVisibility(element: HTMLElement): void {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

toggleSkillsButton.addEventListener("click", () => toggleVisibility(skillsSection));
toggleWorkButton.addEventListener("click", () => toggleVisibility(workExperienceSection));
