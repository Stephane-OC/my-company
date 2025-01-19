function toggleDropdown(id, button) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("hidden");

  // Changer l'icône
  const icon = button.querySelector("img");
  if (dropdown.classList.contains("hidden")) {
    icon.src = "assets/angle-right-solid.svg"; // Icône flèche droite
  } else {
    icon.src = "assets/angle-down-solid.svg"; // Icône flèche bas
  }
}

let currentSlide = 0;
const slides = document.querySelectorAll("#carousel .flex > div");

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  const offset = -currentSlide * 100;
  document.querySelector(
    "#carousel .flex"
  ).style.transform = `translateX(${offset}%)`;
}