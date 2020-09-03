var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  loopedSlides: document.querySelectorAll(".swiper-slide").length,
  slidesPerView: "auto",
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});
