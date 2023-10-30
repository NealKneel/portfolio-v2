//////////////////////////TYPED.JS///////////////////////////////
var typed = new Typed(".auto-type", {
    strings: ["", "An aspiring <b>Web Developer</b>", "<b>Frontend</b> Web Developer", "<b>Backend</b> Web Developer"],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true
})

// document.addEventListener('DOMContentLoaded', function () {window.setTimeout(document.querySelector('svg').classList.add('animated'),5000);})

//////////////////////////SWIPER.JS///////////////////////////////
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    grid: {
      rows: 1,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
      breakpoints: {
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
  });