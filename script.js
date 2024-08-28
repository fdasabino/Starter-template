const themeButton = document.querySelector("button");

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

themeButton.addEventListener("click", toggleTheme);
