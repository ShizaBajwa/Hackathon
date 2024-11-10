// Select the sections to toggle
const skillsSection = document.getElementById("skills")!;
const workExperienceSection = document.getElementById("work-experience")!;

// Select the buttons
const toggleSkillsButton = document.getElementById("toggle-skills")!;
const toggleWorkButton = document.getElementById("toggle-work")!;

// Function to toggle the visibility of a section
function toggleVisibility(element: HTMLElement): void {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Event listeners for buttons
toggleSkillsButton.addEventListener("click", () => toggleVisibility(skillsSection));
toggleWorkButton.addEventListener("click", () => toggleVisibility(workExperienceSection));
