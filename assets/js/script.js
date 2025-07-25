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

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

/**
 * Close navbar when clicking on navbar links
 */
const navLinks = document.querySelectorAll("[data-nav-link]");

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * Accordion toggle
 */
const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () { this.classList.toggle("active"); }

addEventOnElem(accordionAction, "click", toggleAccordion);

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

  // LinkedIn icon hover effect for team cards
  const teamCards = document.querySelectorAll('.eco-card-inner');
  
  teamCards.forEach(card => {
    const linkedinIcon = document.createElement('div');
    linkedinIcon.className = 'eco-linkedin-icon';
    linkedinIcon.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#2ECC71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 9H2V21H6V9Z" stroke="#2ECC71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#2ECC71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    card.appendChild(linkedinIcon);
    
    card.addEventListener('mouseenter', () => {
      linkedinIcon.style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
      linkedinIcon.style.opacity = '0';
    });
  });

  // Smooth hover effects for cards
  const cards = document.querySelectorAll('.eco-card-inner');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});
/**
 * Portfolio filter functionality
 */
// Working JavaScript for Blog Filter
document.addEventListener('DOMContentLoaded', function() {
  // Get all filter buttons and blog posts
  const filterButtons = document.querySelectorAll('.filter-btn');
  const blogPosts = document.querySelectorAll('.eco-post');

  // Add click event to each filter button
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Get filter category from data attribute
      const filterValue = this.getAttribute('data-filter');
      
      // Filter posts
      filterBlogPosts(filterValue);
    });
  });

  // Function to filter blog posts
  function filterBlogPosts(category) {
    blogPosts.forEach(post => {
      if (category === 'all' || post.classList.contains(category)) {
        post.classList.remove('hidden');
      } else {
        post.classList.add('hidden');
      }
    });
  }

  // Initialize with all posts showing
  filterBlogPosts('all');
});
document.getElementById("year").textContent = new Date().getFullYear();
