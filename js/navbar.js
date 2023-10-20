//SHOWS AND HIDES THE SIDEBAR

const sidebar = document.querySelector('.sidebar')
const burger = document.querySelector('.toggle')
const logo = document.querySelector('.logo-container')
let burgerOpen = false;

burger.addEventListener('click', () => {

    if (burgerOpen) {
      logo.classList.remove('hide')
      sidebar.classList.remove('show');
      burgerOpen = false;

    } else {
      logo.classList.add('hide')
      sidebar.classList.add('show');
      burgerOpen = true;
    }

  });

//NAVBAR CLICKED NAVIGATION

const links = document.querySelectorAll('ul li a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        // Remove the "active" class from all links
        links.forEach(link => link.classList.remove('active'));

        // Add the "active" class to the clicked link
        this.classList.add('active');
    });
});

// Function to check which section is in the viewpoint
function checkActiveSection() {
  const scrollPosition = window.scrollY + window.innerHeight / 2;
  const buttons = document.querySelectorAll(".nav-link[href]");

  buttons.forEach(function (button) {
    const targetId = button.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const sectionTop = targetSection.offsetTop;
      const sectionBottom = sectionTop + targetSection.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        buttons.forEach(function (btn) {
          btn.classList.remove("active");
        });
        button.classList.add("active");
      }
    }
  });
}

// Add a scroll event listener to check the active section on scroll
window.addEventListener("scroll", checkActiveSection);

// Function to handle button click and scrolling
function scrollToSection(event) {
  event.preventDefault();
  const targetId = this.getAttribute("href");
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });

    document.querySelector(".nav-link.active").classList.remove("active");
    this.classList.add("active");
  }
}

// Add click event listeners to navbar buttons and sidebar buttons
const buttons = document.querySelectorAll(".nav-link[href]");
buttons.forEach(function (button) {
  button.addEventListener("click", scrollToSection);
});
