console.log("This site was generated by Hugo.");

// homepage-tab-UI-code-here

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed for homepage tabs");
  const tabButtons = document.querySelectorAll(".tab_button");
  const tabContents = document.querySelectorAll(".tab-content");

  if (tabButtons.length === 0 || tabContents.length === 0) {
    console.log("Elements not found");
    return;
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Button clicked: ", button.getAttribute("data-tab"));
      const targetTab = button.getAttribute("data-tab");

      // Remove active class from all buttons and content
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });

      // Add active class to the clicked button and corresponding content
      button.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });
});

// THE CODE FOR HOMEPAGE FAQ GOES HERE
document.addEventListener("DOMContentLoaded", () => {
  const faqAccordionHeaders = document.querySelectorAll(".accordion-header");

  faqAccordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector(".open_close");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.padding = "0 32px";
        icon.classList.remove("rotate-icon");
      } else {
        document.querySelectorAll(".accordion-content").forEach((c) => {
          c.style.maxHeight = null;
          c.style.padding = "0 32px";
          const otherIcon =
            c.previousElementSibling.querySelector(".open_close");
          if (otherIcon) {
            otherIcon.classList.remove("rotate-icon");
          }
        });
        content.style.maxHeight = 62 + "px";
        content.style.padding = "8px 32px 22px 32px";
        icon.classList.add("rotate-icon");
      }
    });
  });
});

// nav bar js

document.addEventListener("DOMContentLoaded", function () {
  const navDropdowns = document.querySelectorAll(".dropdown-toggle");
  navDropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function (e) {
      e.preventDefault();
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
    });
  });

  // Close the dropdown menu if the user clicks outside of it
  window.addEventListener("click", function (e) {
    navDropdowns.forEach(function (dropdown) {
      const dropdownMenu = dropdown.nextElementSibling;
      if (
        dropdownMenu.style.display === "block" &&
        !dropdownMenu.contains(e.target) &&
        !dropdown.contains(e.target)
      ) {
        dropdownMenu.style.display = "none";
      }
    });
  });
});

// Scroll container

document.addEventListener("DOMContentLoaded", () => {
  const uniqueAccordionHeaders = document.querySelectorAll(".unique-accordion-header");

  uniqueAccordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector(".unique-open-close");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.padding = "0 40px";
        icon.classList.remove("rotate-icon");
      } else {
        document.querySelectorAll(".unique-accordion-content").forEach((c) => {
          c.style.maxHeight = null;
          c.style.padding = "0 40px";
          const otherIcon = c.previousElementSibling.querySelector(".unique-open-close");
          if (otherIcon) {
            otherIcon.classList.remove("rotate-icon");
          }
        });
        content.style.maxHeight = "max-content";
        content.style.padding = "0px 40px 40px 40px";
        icon.classList.add("rotate-icon");
      }
    });
  });

});



document.addEventListener("DOMContentLoaded", () => {
  // Get the URL hash value
  const hash = window.location.hash;

  // Define the mapping of hash values to button classes
  const buttonMappings = {
    "#husig-fabri": ".husig_fabri_first_button",
    "#husig-incog": ".husig_incog_first_button",
    "#husig-harmony": ".husig_harmony_first_button"
    // Add more mappings as needed
  };

  // Get the corresponding button class for the current hash value
  const buttonClass = buttonMappings[hash];

  if (buttonClass) {
    // Find the button element and click it
    const button = document.querySelector(buttonClass);
    if (button) {
      button.click();
    }
  }
});



//end


// 

document.addEventListener('DOMContentLoaded', function () {
  const scrollContainer = document.getElementById('slider-container');
  const halfwayScroll = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;

  // Set initial scroll position to halfway
  scrollContainer.scrollLeft = halfwayScroll;

  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollContainer.classList.add('active');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
    scrollContainer.style.cursor = 'grabbing';
  });

  scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
    scrollContainer.style.cursor = 'grab';
  });

  scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
    scrollContainer.style.cursor = 'grab';
  });

  scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scroll speed
    scrollContainer.scrollLeft = scrollLeft - walk;
  });
});

// 