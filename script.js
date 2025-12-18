// Make the menu responsive with the dropdown menu

// Select the menu button, navigation links, and the icon within the button
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-link");
const menuBtnIcon = menuBtn.querySelector("i");

// Add a click event listener to the menu button
menuBtn.addEventListener("click", (e) => {
  
  navLinks.classList.toggle("open");

  
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Add a click event listener to the navigation links
navLinks.addEventListener("click", (e) => {
  
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line"); 
});

// Scrolling configuration
const scrollRevealOption = {
  distance: "50px", 
  origin: "bottom",  
  duration: 1000,   
};

// elements with Scrolling
ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOption,
  origin: "right", 
});
ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 500, 
});
ScrollReveal().reveal(".header-content .section-description", {
  ...scrollRevealOption,
  delay: 1000, 
});
ScrollReveal().reveal(".header-content .header-btn", {
  ...scrollRevealOption,
  delay: 1500, 
});

//story section elements
ScrollReveal().reveal(".story-image img", {
  ...scrollRevealOption,
  origin: "left", 
});
ScrollReveal().reveal(".story-content .section-header", {
  ...scrollRevealOption,
  delay: 500, 
});
ScrollReveal().reveal(".story-content .section-description", {
  ...scrollRevealOption,
  delay: 1000, 
});
ScrollReveal().reveal(".story-content .story-btn", {
  ...scrollRevealOption,
  delay: 1500, 
});

// Reveal poster cards with interval
ScrollReveal().reveal(".poster-card", {
  ...scrollRevealOption,
  interval: 500, 
});

// Reveal chef section elements
ScrollReveal().reveal(".chef-image img", {
  ...scrollRevealOption,
  origin: "right", 
});
ScrollReveal().reveal(".chef-content .section-header", {
  ...scrollRevealOption,
  delay: 500, 
});
ScrollReveal().reveal(".chef-content .section-description", {
  ...scrollRevealOption,
  delay: 1000, 
});
ScrollReveal().reveal(".chef-list li", {
  ...scrollRevealOption,
  delay: 1500, 
  interval: 500, 
});

//Swiper for the client review section
const swiper = new Swiper(".swiper", {
  loop: true, // Enable looping of slides

  pagination: {
    el: ".swiper-pagination",
  },
});