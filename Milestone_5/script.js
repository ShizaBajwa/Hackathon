

document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;

    document.getElementById("resumeName").textContent = name;
    document.getElementById("resumeEmail").textContent = email;
    document.getElementById("resumeEducation").textContent = education;
    document.getElementById("resumeSkills").textContent = skills;

    document.getElementById("resume").style.display = "block";
    
   
    const resumeUrl = `https://yourproject.vercel.app/resume/${name.replace(/\s+/g, '-').toLowerCase()}`;

    alert(`Your resume URL: ${resumeUrl}`);

    document.getElementById("downloadResume").addEventListener("click", function() {
        const resumeContent = document.getElementById("resume");
        html2pdf()
            .from(resumeContent)
            .save(`${name}-resume.pdf`);
    });
});
