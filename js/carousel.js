(function() {
  const container = document.querySelector(".section-hero");
  const carousel = document.querySelectorAll(".section-hero__item-carousel");
  document
    .querySelector(".section-hero")
    .addEventListener("mouseenter", mouseEnter);
  document
    .querySelector(".section-hero")
    .addEventListener("mouseleave", mouseLeave);

  function change() {
    let activ = container.querySelector(".section-hero__item-carousel.activ");
    let next =
      container.querySelector(
        ".section-hero__item-carousel.activ + .section-hero__item-carousel"
      ) || carousel[0];
    if (activ) {
      activ.classList.remove("activ");
    }
    if (next) {
      next.classList.add("activ");
    }
  }
  change();
  function mouseLeave(){
     this.time = setInterval(change, 5000)
  };
  function mouseEnter(){
      clearInterval(this.time)
  }
})();
