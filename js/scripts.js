//////////////////////////TYPED.JS///////////////////////////////
var typed = new Typed(".auto-type", {
    strings: ["", "Aspiring <b>Web Developer</b>", "<b>Frontend</b> Web Developer", "<b>Backend</b> Web Developer"],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true
})

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
      768: {
          slidesPerView: 2,
      },
      1440: {
          slidesPerView: 3,
      },
  },
  });

///////////////////////CONTACT FORM/////////////////////////////////////

const sendMailBtn = document.getElementById("sendMailBtn");
const inputFields = document.querySelectorAll(".inputBox input");
const textarea = document.getElementById("message");

// Function to check if all input fields and the textarea are not empty
function checkFields() {
    for (const inputField of inputFields) {
        if (inputField.value.trim() === "") {
            return false;
        }
    }
    return textarea.value.trim() !== "" && isValidEmail(emailInput.value);
}

// Function to enable or disable the button
function toggleButtonState() {
    if (checkFields()) {
        sendMailBtn.removeAttribute("disabled");
        sendMailBtn.classList.add("send-mail-btn");
    } else {
        sendMailBtn.setAttribute("disabled", true);
        sendMailBtn.classList.remove("send-mail-btn");
    }
}

// Add event listeners to input fields and textarea for real-time validation
inputFields.forEach((inputField) => {
    inputField.addEventListener("input", toggleButtonState);
});

textarea.addEventListener("input", toggleButtonState);

// Initial button state check
toggleButtonState();


const emailInput = document.getElementById('user_email');
const spanEmail = document.getElementById('span_email');
const sendBtn = document.getElementById("sendMailBtn");


  emailInput.addEventListener('input', function () {
      if (this.value === "") {
          spanEmail.classList.remove('invalidEmail');
          spanEmail.classList.add('input-span');
          spanEmail.innerHTML = 'Email';
      }
      else if (isValidEmail(this.value)) {
          spanEmail.classList.add('input-span');
          spanEmail.classList.remove('invalidEmail');
          sendBtn.removeAttribute("disabled");
          sendBtn.classList.add("send-mail-btn");
      } else {
          spanEmail.classList.remove('input-span');
          spanEmail.classList.add('invalidEmail');
          sendBtn.setAttribute("disabled", true);
          sendBtn.classList.remove("send-mail-btn");
      }
  });

function isValidEmail(email) {
    // Regular expression to validate email
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
}


////////////SCROLL REVEAL////////////////

ScrollReveal({ distance: '5rem', reset: true });
ScrollReveal().reveal('.top', {origin: 'top'});
ScrollReveal().reveal('.right', {origin: 'right'});
ScrollReveal().reveal('.bottom', {origin: 'bottom'});
ScrollReveal().reveal('.left', {origin: 'left'});
ScrollReveal().reveal('.scroll-reveal-1');
ScrollReveal().reveal('.scroll-reveal-2', {delay: 500});
ScrollReveal().reveal('.scroll-reveal-3', {delay: 600});
ScrollReveal().reveal('.scroll-reveal-4', {delay: 700});
ScrollReveal().reveal('.scroll-reveal-5', {delay: 800});