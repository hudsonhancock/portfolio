$(document).ready(function () {
  console.log("ready!");

  $("#nav-btn").click(() => {
    $(".menu").removeClass("invisible");
    $(".showcase").addClass("blur");
    $("footer").addClass("blur");

    $("#nav-btn").addClass("invisible");
  });

  $("#down-arrow").click(() => {
    $(".menu").removeClass("invisible");
    $(".showcase").removeClass("blur");
    $("footer").removeClass("blur");
    $(".menu").addClass("invisible");

    $("#nav-btn").removeClass("invisible");
  });
});

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 1.1,
  centeredSlides: true,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
