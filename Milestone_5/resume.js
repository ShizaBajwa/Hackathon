module.exports = (req, res) => {
    const { name } = req.query;  

    const resumeData = {
        name: name,
        email: "example@example.com",
        education: "Bachelor's Degree in Computer Science",
        skills: "JavaScript, HTML, CSS, React, Node.js"
    };

    res.status(200).json(resumeData);
};
