"use strict";

// Elements
const nav = document.querySelector("nav");
const openBtn = document.querySelector(".menu-button");
const mainContent = document.querySelector("main");
const navLinks = document.querySelectorAll("nav ul li a");

// Functions
function toggleNav() {
  nav.classList.toggle("show");
}

function closeNav(e) {
  e.preventDefault();
  nav.classList.remove("show");
}

// Event Listeners
openBtn.addEventListener("click", toggleNav);
mainContent.addEventListener("click", closeNav);
navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});
