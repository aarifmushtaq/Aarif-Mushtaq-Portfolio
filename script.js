// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check localStorage for theme preference
const savedTheme = localStorage.getItem("theme");
let isDarkMode = savedTheme === "dark" || savedTheme === null; // Default dark mode

// Set initial theme and icon
if (isDarkMode) {
  body.classList.remove("light-mode");
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
} else {
  body.classList.add("light-mode");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  body.classList.toggle("light-mode");
  themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});