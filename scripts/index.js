document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      1023: {
        slidesPerView: 1.5,
        centeredSlides: true,
      },
    },
  });
});
