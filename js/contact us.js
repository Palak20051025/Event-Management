document.addEventListener("DOMContentLoaded", () => {
    // Animate form inputs on focus
    const formElements = document.querySelectorAll(".contact-form input, .contact-form textarea");
  
    formElements.forEach((element) => {
      element.addEventListener("focus", () => {
        element.style.transform = "scale(1.02)";
        element.style.boxShadow = "0 4px 10px rgba(255, 87, 34, 0.5)";
      });
  
      element.addEventListener("blur", () => {
        element.style.transform = "scale(1)";
        element.style.boxShadow = "none";
      });
    });
  
    // Hover effect on social icons
    const socialIcons = document.querySelectorAll(".social-icons .icon");
  
    socialIcons.forEach((icon) => {
      icon.addEventListener("mouseover", () => {
        icon.style.transform = "rotate(360deg)";
        icon.style.transition = "transform 0.5s ease";
      });
  
      icon.addEventListener("mouseout", () => {
        icon.style.transform = "rotate(0deg)";
      });
    });
  });
  