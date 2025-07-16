// === TYPEWRITER EFFECT ===
const typingElement = document.querySelector(".typing");
const phrases = [
  "Futuristic Web Developer",
  "AI Enthusiast",
  "Tech Dreamer",
  "Full Stack Innovator",
  "Cloud Architect"
];
let charIndex = 0;
let phraseIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  const currentText = typingElement.textContent;

  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentPhrase.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentPhrase.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// === THEME TOGGLE ===
function toggleTheme() {
  const html = document.documentElement;
  const newTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

// === APPLY STORED THEME ON LOAD ===
window.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
  }
});

// === SCROLL ANIMATION ===
const sections = document.querySelectorAll(".section");
const options = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

sections.forEach(section => observer.observe(section));

// === SCROLL TO SECTION ===
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

// === RIPPLE EFFECT ON BUTTONS ===
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    circle.style.left = `${e.offsetX}px`;
    circle.style.top = `${e.offsetY}px`;
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

// === CURSOR GLOW ===
const cursor = document.createElement("div");
cursor.classList.add("glow-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});