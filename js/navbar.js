//SHOWS AND HIDES THE SIDEBAR

const sidebar = document.querySelector('.sidebar')
function showSidebar() {
    sidebar.classList.add('show');
}

function hideSidebar() {
    sidebar.classList.remove('show');
}

//NAVBAR CLICKED NAVIGATION

const links = document.querySelectorAll('ul li');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        // Remove the "active" class from all links
        links.forEach(link => link.classList.remove('active'));

        // Add the "active" class to the clicked link
        this.classList.add('active');
    });
});

//FUNCTION TO CHECK WHICH SECTION IS IN THE VIEW POINT
function checkActiveSection() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const buttons = document.querySelectorAll(".nav-buttons[href]");
    
    buttons.forEach(function(button) {
      const targetId = button.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const sectionTop = targetSection.offsetTop;
        const sectionBottom = sectionTop + targetSection.offsetHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          buttons.forEach(function(btn) {
            btn.classList.remove("active");
          });
          button.classList.add("active");
        }
      }
    });
  }
  
  // ADD A SCROLL EVENT LISTENER TO CHECK THE ACTIVE SECTION ON SCROLL
  window.addEventListener("scroll", checkActiveSection);
  
  // FUNCTION TO HANDLE BUTTON CLICK AND SCROLLING
  function scrollToSection(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
  
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
      });
  
      document.querySelector(".nav-buttons.active").classList.remove("active");
      this.classList.add("active");
    }
  }
  
  // ADD CLICK EVENT LISTENERS TO NAVBAR BUTTONS
  const buttons = document.querySelectorAll(".nav-buttons[href]");
  buttons.forEach(function(button) {
    button.addEventListener("click", scrollToSection);
  });
  