/* ==========================================
   SIMPLE PORTFOLIO CHATBOT
========================================== */

const answerBox = document.getElementById("answerBox");

const buttons = document.querySelectorAll(".questions button");

const answers = {

    who:
`👋 Hello!

I'm Shashank Srivastava.

🎓 B.Tech CSE Student

💻 Passionate about AI, Machine Learning and Web Development.

I enjoy building modern websites and practical software projects while continuously learning new technologies.`,

    education:
`🎓 Education

• Bachelor of Technology (B.Tech)
• Computer Science & Engineering

Currently learning:

✔ HTML
✔ CSS
✔ JavaScript
✔ Python
✔ Flask
✔ Machine Learning
✔ TensorFlow`,

    skills:
`🚀 Skills

💻 Frontend
• HTML
• CSS
• JavaScript

⚙ Backend
• Python
• Flask

🤖 Machine Learning
• TensorFlow
• Keras
• Scikit-learn

🛠 Tools
• Git
• GitHub
• VS Code`,

    projects:
`📂 Projects

🌱 Soil Analysis System

• Soil Image Classification
• Soil Fertility Prediction
• Crop Recommendation
• Flask Web Application
• Machine Learning & CNN

Currently building this Digital Identity Card Website.`,

    contact:
`📞 Contact Information

📧 shashanksrivastava323@gmail.com

📱 +91 7439891664

📍 Kolkata, India

🌐 GitHub
github.com/genuineinsaan

💼 LinkedIn
linkedin.com/in/shashank-srivastava-58269b281`
};


/* ==========================================
   FUNCTION
========================================== */

function showAnswer(buttonId, answer){

    answerBox.style.opacity = "0";

    buttons.forEach(btn => btn.classList.remove("active"));

    document.getElementById(buttonId).classList.add("active");

    setTimeout(()=>{

        answerBox.textContent = answer;

        answerBox.style.opacity = "1";

    },150);

}


/* ==========================================
   EVENTS
========================================== */

document.getElementById("whoBtn").addEventListener("click",()=>{

    showAnswer("whoBtn",answers.who);

});

document.getElementById("educationBtn").addEventListener("click",()=>{

    showAnswer("educationBtn",answers.education);

});

document.getElementById("skillsBtn").addEventListener("click",()=>{

    showAnswer("skillsBtn",answers.skills);

});

document.getElementById("projectsBtn").addEventListener("click",()=>{

    showAnswer("projectsBtn",answers.projects);

});

document.getElementById("contactBtn").addEventListener("click",()=>{

    showAnswer("contactBtn",answers.contact);

});