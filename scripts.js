// scripts.js

// Hide/Show sections based on navbar clicks
const navLinks = document.querySelectorAll(".nav-link:not(#contact-link)"); // Exclude contact link (moved to modal)
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

// Populate About photo-gallery
const photos = [
  // Photos to add, ideally would replace with file-system query
  "photo-01.jpg",
  "photo-02.jpg",
  "photo-03.jpg",
  "photo-04.jpg",
  "photo-05.jpg",
  "photo-06.jpg",
  "photo-07.jpg",
  "photo-08.jpg",
  "photo-09.jpg",
  "photo-10.jpg",
  "photo-11.jpg",
  "photo-12.jpg",
  "photo-13.jpg",
  "photo-14.jpg",
  "photo-15.jpg",
  "photo-16.jpg",
  "photo-17.jpg",
  "photo-18.jpg",
  "photo-19.jpg",
  "photo-20.jpg",
  "photo-21.jpg",
  "photo-22.jpg",
  "photo-23.jpg",
  "photo-24.jpg",
  "photo-25.jpg",
  "photo-26.jpg",
  "photo-27.jpg",
  "photo-28.jpg",
  "photo-29.jpg",
  "photo-30.jpg",
];

const gallery = document.getElementById("gallery");
for (let photo of photos) {
  const photo_div = `<div class="col-12 col-md-6 col-lg-4">
      <div class="ratio ratio-1x1">
        <img src="images/gallery/${photo}" class="img-fluid object-fit-cover rounded" />
      </div>
    </div>`;

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML about inserting raw html
  gallery.insertAdjacentHTML("beforeend", photo_div);
}

// Manage modal form (contacts)
const contact = document.getElementById("contact");
const modal = bootstrap.Modal.getOrCreateInstance(contact);
const form = document.getElementById("contact-form");

// Clear form concents when modal is closed (hidden)
contact.addEventListener("hidden.bs.modal", function () {
  form.reset();
});

// Actions when submit/send is clicked
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const raw = new FormData(form); // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData

  data = {
    email: raw.get("email"),
    message: raw.get("message"),
  };
  console.log(data); // Surrogate for actual email code

  form.reset();
  modal.hide();
});
