'use strict';

/**
 * Add event listener to element(s)
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * Navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const hamburger = document.querySelector(".nav-open-btn.hamburger");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  if (hamburger) {
    hamburger.classList.toggle("active");
  }
  document.body.classList.toggle("menu-open");
  
  // Prevent body scroll when menu is open
  if (navbar.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

// Ensure all nav togglers work
addEventOnElem(navToggler, "click", toggleNavbar);

// Also add click to hamburger specifically
if (hamburger) {
  hamburger.addEventListener("click", toggleNavbar);
}

/**
 * Close navbar when clicking on navbar links
 */
const navLinks = document.querySelectorAll("[data-nav-link]");

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  if (hamburger) {
    hamburger.classList.remove("active");
  }
  document.body.classList.remove("menu-open");
  document.body.style.overflow = ""; // Restore scroll
}

addEventOnElem(navLinks, "click", closeNavbar);

// Close menu when clicking outside
if (overlay) {
  overlay.addEventListener("click", closeNavbar);
}

// Close menu when window is resized to desktop
window.addEventListener("resize", function() {
  if (window.innerWidth >= 992) {
    closeNavbar();
  }
});

// Handle orientation change
window.addEventListener("orientationchange", function() {
  setTimeout(closeNavbar, 100);
});

// Prevent zoom on double tap for mobile
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
  const now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);

// Improve touch responsiveness
if ('ontouchstart' in window) {
  document.body.classList.add('touch-device');
}

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Update year in footer
  document.getElementById("year").textContent = new Date().getFullYear();
});
