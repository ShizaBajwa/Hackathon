var form = document.getElementById('resumeForm');
var resumeName = document.getElementById('resumeName');
var resumeEmail = document.getElementById('resumeEmail');
var resumeEducation = document.getElementById('resumeEducation');
var resumeUniversity = document.getElementById('resumeUniversity');
var resumeJobTitle = document.getElementById('resumeJobTitle');
var resumeCompany = document.getElementById('resumeCompany');
var resumeSkills = document.getElementById('resumeSkills');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var university = document.getElementById('university').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var skills = document.getElementById('skills').value;
   
    if (!name || !email || !education || !university || !jobTitle || !company || !skills) {
        alert('Please fill all fields');
        return;
    }
   
    resumeName.innerText = name;
    resumeEmail.innerText = "Email: ".concat(email);
    resumeEducation.innerText = education;
    resumeUniversity.innerText = university;
    resumeJobTitle.innerText = jobTitle;
    resumeCompany.innerText = company;
    resumeSkills.innerText = skills;
});
