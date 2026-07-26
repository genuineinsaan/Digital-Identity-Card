/* ==========================================
   TOAST NOTIFICATION
========================================== */

const toast = document.getElementById("toast");

let toastTimer;

function showToast(message, type = "info") {

    clearTimeout(toastTimer);

    toast.className = "";

    toast.classList.add(type);

    toast.textContent = message;

    requestAnimationFrame(() => {

        toast.classList.add("show");

    });

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* ==========================================
   CONTACT FORM (EmailJS)
========================================== */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const submitButton = form.querySelector("button");

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {

        showToast("Please fill all fields.", "error");

        return;

    }

    submitButton.disabled = true;

    submitButton.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    emailjs.send(

        "service_edncl4v",

        "template_6po70yg",

        {

            from_name: name,

            from_email: email,

            message: message

        }

    )

    .then(() => {

        showToast("Message sent successfully!", "success");

        form.reset();

    })

    .catch((error) => {

        console.error("EmailJS Error:", error);

        showToast("Failed to send message.", "error");

    })

    .finally(() => {

        submitButton.disabled = false;

        submitButton.innerHTML = "Send";

    });

});


/* ==========================================
   SHARE BUTTON
========================================== */

const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", async () => {

    const shareData = {

        title: "Shashank Srivastava | Digital Identity Card",

        text: "Check out my Digital Identity Card!",

        url: window.location.href

    };

    if (navigator.share) {

        try {

            await navigator.share(shareData);

        }

        catch {

            showToast("Share cancelled.", "info");

        }

    }

    else {

        try {

            if (navigator.clipboard) {

                await navigator.clipboard.writeText(window.location.href);

                showToast("Link copied to clipboard!", "success");

            }

            else {

                showToast("Clipboard not supported.", "error");

            }

        }

        catch {

            showToast("Unable to copy the link.", "error");

        }

    }

});

/* ==========================================
   BUTTON CLICK ANIMATION
========================================== */

document.querySelectorAll("button").forEach((button) => {

    button.addEventListener("click", function () {

        const originalTransform = this.style.transform;

        this.style.transform = "scale(.96)";

        setTimeout(() => {

            this.style.transform = originalTransform;

        }, 150);

    });

});


/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const sections = document.querySelectorAll(

    ".hero, .contact-info, .social-links, .save-contact, .contact-form, .chatbot"

);

const observer = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {

        threshold: 0.15

    }

);

sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

    section.style.transition =

        "opacity .8s ease, transform .8s ease";

    observer.observe(section);

});


/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log("Digital Identity Card Loaded Successfully.");

});