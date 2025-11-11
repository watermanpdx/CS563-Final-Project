// scripts.js

// Hide/Show sections based on navbar clicks
const navLinks = document.querySelectorAll(".nav-link");
for (const link of navLinks) {
  // Add click event-listener to all nav-link elements
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent shifting view to section

    for (const link of navLinks) {
      const targetSection = document.querySelector(link.getAttribute("href"));
      if (link == event.target) {
        // Unhide clicked section and highlight link
        link.classList.add("active");
        targetSection.classList.remove("d-none");
      } else {
        // Hide all others and unhighlight link
        link.classList.remove("active");
        targetSection.classList.add("d-none");
      }
    }
  });
}

// Auto populate About with pictures from gallery
const gallery = document.querySelector(".gallery");
