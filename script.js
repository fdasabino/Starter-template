const nav = document.querySelector("nav");
const openBtn = document.querySelector(".menu-button");
const mainContent = document.querySelector("main");

function toggleNav() {
  nav.classList.toggle("show");
}

function closeNav() {
  nav.classList.remove("show");
}

openBtn.addEventListener("click", toggleNav);
mainContent.addEventListener("click", closeNav);
