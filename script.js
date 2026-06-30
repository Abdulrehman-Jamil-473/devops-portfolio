// ===============================
// DEVOPS PORTFOLIO JAVASCRIPT
// Abdul Rehman Jamil
// ===============================

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth"
        });
    });
});


// ===============================
// Typing Effect
// ===============================

const textArray = [
    "DevOps Engineer",
    "AWS Enthusiast",
    "Docker Expert",
    "Linux Administrator",
    "Kubernetes Learner",
    "CI/CD Pipeline Builder"
];

const typingElement = document.querySelector(".hero-text h3");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentText = textArray[textIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex++);

        if (charIndex > currentText.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            textIndex++;

            if (textIndex >= textArray.length) {

                textIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();


// ===============================
// Reveal Animation
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", revealSection);

function revealSection() {

    const trigger = window.innerHeight * 0.8;

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("show");

        }

    });

}


// ===============================
// Back To Top Button
// ===============================

const button = document.createElement("button");

button.innerHTML = "↑";

button.id = "topBtn";

document.body.appendChild(button);

button.style.position = "fixed";
button.style.bottom = "30px";
button.style.right = "30px";
button.style.padding = "15px 18px";
button.style.border = "none";
button.style.borderRadius = "50%";
button.style.background = "#38bdf8";
button.style.color = "#000";
button.style.cursor = "pointer";
button.style.fontSize = "20px";
button.style.display = "none";
button.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        button.style.display = "block";

    } else {

        button.style.display = "none";

    }

});

button.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// Active Navbar
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});


// ===============================
// Welcome Message
// ===============================

window.onload = () => {

    console.log("Welcome to Abdul Rehman Jamil Portfolio");

};