const bars = document.querySelector(".bars");
const closeButton = document.querySelector(".closeButton");
const list = document.querySelector(".hiddenList");

bars.addEventListener("click", () => {
  bars.style.display = "none";
  list.style.left = document.body.offsetWidth + 1 - list.offsetWidth + "px";
});

closeButton.addEventListener("click", () => {
  list.style.left = "100%";
  bars.style.display = "block";
});

window.addEventListener("resize", () => {
  list.style.left = "100%";
  if (document.body.offsetWidth > 600) {
    bars.style.display = "none";
  } else if (document.body.offsetWidth <= 600) {
    bars.style.display = "block";
  }
});
