function isElementInViewport(el, threshold = 0.3) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const topThreshold = windowHeight * (1 - threshold);
  const bottomThreshold = windowHeight * threshold;
  const leftThreshold = windowWidth * (1 - threshold);
  const rightThreshold = windowWidth * threshold;

  return (
    rect.bottom > topThreshold &&
    rect.top < bottomThreshold &&
    rect.right > leftThreshold &&
    rect.left < rightThreshold
  );
}

// Function to update the active navigation link based on the currently viewed section
function updateActiveNavLinks() {
  const sections = document.querySelectorAll("section"); // Assuming your sections have "section" tags
  const navLinks = document.querySelectorAll(".nav-link");
  
  sections.forEach((section, index) => {
    if (isElementInViewport(section)) {
      // Remove the "active" class from all navigation links
      navLinks.forEach((link) => link.classList.remove("active"));
      
      // Add the "active" class to the corresponding navigation link
      navLinks[index].classList.add("active");
    }
  });
}

// Add an event listener to handle scrolling and update the active navigation link
window.addEventListener("scroll", updateActiveNavLinks);

// Initial call to set the active navigation link based on the initial viewport
updateActiveNavLinks();

//////////////////MENU BUTTON///////////////////

const menuBtn = document.getElementById('menuBtn');
const sideBar = document.getElementById('sideBar');
const sideBarButtons = document.getElementById('side-bar');

sideBarOpacity = false;
menuBtn.addEventListener('click', () => {
  sideBar.classList.toggle('show-sideBar');
  sideBarButtons.classList.toggle('show-buttons') 
});