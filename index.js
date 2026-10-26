
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a");

function updateNavigation() {
  let current = "home";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.id;
    }
  });

  links.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current
    );
  });
}

window.addEventListener("scroll", updateNavigation);
updateNavigation();
