/* ==========================================
   LANGUAGE TOGGLE
========================================== */

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "en";

const translations = {

    en: {

        profession: "B.Tech CSE Student",

        intro:
            "Passionate about AI, Machine Learning and Web Development. I enjoy building modern and useful digital solutions.",

        email:
            '<i class="fa-solid fa-envelope"></i> Email - shashanksrivastava323@gmail.com',

        phone:
            '<i class="fa-solid fa-phone"></i> Phone - +91 7439891664',

        location:
            '<i class="fa-solid fa-location-dot"></i> Location - Kolkata, India',

        save: '<i class="fa-solid fa-address-card"></i> Save Contact',

        contactHeading: "Contact Me",

        chatHeading: "Ask Me",

        answer:
            "👋 Select a question below to know more about me.",

        namePlaceholder: "Your Name",

        emailPlaceholder: "Your Email",

        messagePlaceholder: "Your Message",

        send: "Send",

        who: "Who are you?",

        education: "Education",

        skills: "Skills",

        projects: "Projects",

        contact: "Contact"

    },

    hi: {

        profession: "बी.टेक सीएसई छात्र",

        intro:
            "मुझे AI, मशीन लर्निंग और वेब डेवलपमेंट में रुचि है। मुझे आधुनिक और उपयोगी डिजिटल समाधान बनाना पसंद है।",

        email:
            '<i class="fa-solid fa-envelope"></i> ईमेल - shashanksrivastava323@gmail.com',

        phone:
            '<i class="fa-solid fa-phone"></i> फ़ोन - +91 7439891664',

        location:
            '<i class="fa-solid fa-location-dot"></i> स्थान - कोलकाता, भारत',

        save: '<i class="fa-solid fa-address-card"></i> संपर्क सहेजें',

        contactHeading: "संपर्क करें",

        chatHeading: "मुझसे पूछें",

        answer:
            "👋 मेरे बारे में जानने के लिए नीचे कोई प्रश्न चुनें।",

        namePlaceholder: "आपका नाम",

        emailPlaceholder: "आपका ईमेल",

        messagePlaceholder: "आपका संदेश",

        send: "भेजें",

        who: "आप कौन हैं?",

        education: "शिक्षा",

        skills: "कौशल",

        projects: "प्रोजेक्ट",

        contact: "संपर्क"

    }

};

languageBtn.addEventListener("click", () => {

    currentLanguage = currentLanguage === "en" ? "hi" : "en";

    languageBtn.innerHTML =
        currentLanguage === "en"
            ? "🌍 EN"
            : "🌍 हिन्दी";

    const lang = translations[currentLanguage];

    document.getElementById("profession").textContent = lang.profession;

    document.getElementById("intro").textContent = lang.intro;

    document.getElementById("emailText").innerHTML = lang.email;

    document.getElementById("phoneText").innerHTML = lang.phone;

    document.getElementById("locationText").innerHTML = lang.location;

    document.getElementById("saveBtn").innerHTML = lang.save;

    document.getElementById("contactHeading").textContent =
        lang.contactHeading;

    document.getElementById("chatHeading").textContent =
        lang.chatHeading;

    document.getElementById("answerBox").textContent =
        lang.answer;

    document.getElementById("name").placeholder =
        lang.namePlaceholder;

    document.getElementById("email").placeholder =
        lang.emailPlaceholder;

    document.getElementById("message").placeholder =
        lang.messagePlaceholder;

    document.querySelector("#contactForm button").textContent =
        lang.send;

    document.getElementById("whoBtn").textContent =
        lang.who;

    document.getElementById("educationBtn").textContent =
        lang.education;

    document.getElementById("skillsBtn").textContent =
        lang.skills;

    document.getElementById("projectsBtn").textContent =
        lang.projects;

    document.getElementById("contactBtn").textContent =
        lang.contact;

});