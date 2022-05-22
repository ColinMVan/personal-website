const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const closeMenu = document.querySelector(".close-menu");

hamburger.addEventListener("click", () => {
  links.style.display = "flex";
  links.style.top = "0";
});

closeMenu.addEventListener("click", () => {
  links.style.top = "-100%";
});
