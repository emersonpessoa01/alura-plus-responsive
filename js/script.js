let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");
let icons = document.querySelector("#menu-btn");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});


menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
