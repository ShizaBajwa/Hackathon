const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeName = document.getElementById('resumeName') as HTMLElement;
const resumeEmail = document.getElementById('resumeEmail') as HTMLElement;
const resumeEducation = document.getElementById('resumeEducation') as HTMLElement;
const resumeUniversity = document.getElementById('resumeUniversity') as HTMLElement;
const resumeJobTitle = document.getElementById('resumeJobTitle') as HTMLElement;
const resumeCompany = document.getElementById('resumeCompany') as HTMLElement;
const resumeSkills = document.getElementById('resumeSkills') as HTMLElement;


form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const university = (document.getElementById('university') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    if (!name || !email || !education || !university || !jobTitle || !company || !skills) {
        alert('Please fill all fields');
        return;
    }

    resumeName.innerText = name;
    resumeEmail.innerText = `Email: ${email}`;
    resumeEducation.innerText = education;
    resumeUniversity.innerText = university;
    resumeJobTitle.innerText = jobTitle;
    resumeCompany.innerText = company;
    resumeSkills.innerText = skills;
});
