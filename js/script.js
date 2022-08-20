let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");
let icons = document.querySelector("#menu-btn");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
  navbar.classList.remove("active")
});

(function () {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      icons.classList.add("color");
    } else {
      icons.classList.remove("color");
    }
  });
})();

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

const target = document.querySelectorAll("[data-anime]");

const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4.5;
  target.forEach(function (element) {
    if (element.offsetTop < windowTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }

    // console.log(element.offsetTop)
    // console.log(window.innerHeight)
  });
}
window.addEventListener("scroll", function () {
  animeScroll();
});
