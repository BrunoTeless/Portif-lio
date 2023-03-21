const item = document.querySelectorAll("[data-animation]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.5;
  console.log(windowTop);
  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animado");
    } else {
      element.classList.remove("animado");
    }
  });
};

animeScroll();

window.addEventListener("scroll", () => {
  animeScroll();
});
