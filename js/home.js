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
      return textarea.value.trim() !== "";
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
          spanEmail.innerHTML = 'Email';
          sendBtn.removeAttribute("disabled");
          sendBtn.classList.add("send-mail-btn");
      } else {
          spanEmail.classList.remove('input-span');
          spanEmail.classList.add('invalidEmail');
          spanEmail.innerHTML = '<svg width=".7rem" height=".7rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg> Email';
          sendBtn.setAttribute("disabled", true);
          sendBtn.classList.remove("send-mail-btn");
      }
  });
  
  function isValidEmail(email) {
      // Regular expression to validate email
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
  }

  //////////////////SKILLS BUTTON////////////////////////

  
  const skillsBtn = document.getElementById('skillsBtn');
  const skillsContainer = document.getElementById('skillsContainer');
  const icon = document.getElementById('skillsBtnIcon');

  let rotated = false;

  skillsBtn.addEventListener('click', () => {
    skillsContainer.classList.toggle('show-skills');
    if (rotated) {
        icon.style.transform = "rotate(0deg)";
      } else {
        icon.style.transform = "rotate(180deg)";
    }
    rotated = !rotated;
});