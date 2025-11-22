// scripts.js

// Hide/Show sections based on navbar clicks ======================================================
const navLinks = document.querySelectorAll(".nav-link:not(#contact-link)"); // Exclude contact link (moved to modal)
const navCollapse = bootstrap.Collapse.getOrCreateInstance(
  // https://getbootstrap.com/docs/5.0/components/collapse/
  document.getElementById("navbarNavAltMarkup"),
  { toggle: false } // https://stackoverflow.com/questions/75949166/why-does-bootstrap-5s-getorcreateinstance-method-for-collapsibles-immediately
);

for (const link of navLinks) {
  // Add click event listener to all nav-link elements
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent shifting view to section
    const clickedLink = event.currentTarget;

    for (const navLink of navLinks) {
      const targetSection = document.querySelector(
        navLink.getAttribute("href")
      );

      if (navLink === clickedLink) {
        // Unhide clicked section and highlight link
        navLink.classList.add("active");
        targetSection.classList.remove("d-none");
      } else {
        // Hide all others and unhighlight link
        navLink.classList.remove("active");
        targetSection.classList.add("d-none");
      }
    }

    // Close the expanded navbar
    navCollapse.hide();
  });
}

// Handle contact link separately
const contactLink = document.getElementById("contact-link");
contactLink.addEventListener("click", (event) => {
  // Close the expanded navbar
  navCollapse.hide();
});

// Populate About photo-gallery ===================================================================
const photos = [
  // Photos to add, ideally would replace with file-system query
  { file: "photo-01.jpg", alt: "tayte driving electric semi" },
  { file: "photo-02.jpg", alt: "tayte and rachel in neu-ulm" },
  { file: "photo-03.jpg", alt: "tayte and quinn photography in park" },
  { file: "photo-04.jpg", alt: "stuttgart schlossplatz fountain" },
  { file: "photo-05.jpg", alt: "tayte and quinn in park" },
  { file: "photo-06.jpg", alt: "giant rubber duck in river" },
  { file: "photo-07.jpg", alt: "bird building nest" },
  { file: "photo-08.jpg", alt: "vatican swiss guard" },
  { file: "photo-09.jpg", alt: "tayte and quinn at rhine falls" },
  { file: "photo-10.jpg", alt: "quinn on bike through fall leaves" },
  { file: "photo-11.jpg", alt: "rachel and quinn on bridge in amsterdam" },
  { file: "photo-12.jpg", alt: "quinn closeup" },
  { file: "photo-13.jpg", alt: "tayte and quinn trevi fountain" },
  { file: "photo-14.jpg", alt: "sorrento main street" },
  { file: "photo-15.jpg", alt: 'quinn on swing with "Little Dude" sweater' },
  {
    file: "photo-16.jpg",
    alt: "tayte and quinn in front of fountain in berlin",
  },
  { file: "photo-17.jpg", alt: "tayte and quinn on beach" },
  { file: "photo-18.jpg", alt: "inflatable multi-color eyes" },
  { file: "photo-19.jpg", alt: "three different color italian cars" },
  { file: "photo-20.jpg", alt: "tayte and quinn with sunglasses" },
  { file: "photo-21.jpg", alt: "quinn in giant clogs" },
  { file: "photo-22.jpg", alt: "plants on balcony in strassbourg alley" },
  { file: "photo-23.jpg", alt: "tayte at roman colosseum" },
  { file: "photo-24.jpg", alt: "quinn in sunglasses" },
  {
    file: "photo-25.jpg",
    alt: "tayte rachel and quinn in front of cologne cathedral",
  },
  { file: "photo-26.jpg", alt: "closeup of bees on flowers" },
  { file: "photo-27.jpg", alt: "amsterdam canals bridges and boats" },
  {
    file: "photo-28.jpg",
    alt: "quinn looking at a painting of birds at the louvre",
  },
  { file: "photo-29.jpg", alt: "quinn taking photos" },
  { file: "photo-30.jpg", alt: "closeup of a giraffe" },
];

const gallery = document.getElementById("gallery");
for (let photo of photos) {
  const div = `
  <div class="col-12 col-md-6 col-lg-4">
    <div class="ratio ratio-1x1">
      <img 
        src="images/gallery/${photo.file}"
        class="img-fluid object-fit-cover rounded"
        alt="${photo.alt}"
        loading="lazy"
      />
    </div>
  </div>`;

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML about inserting raw html
  gallery.insertAdjacentHTML("beforeend", div);
}

// Manage modal form (contacts) ===================================================================
const contact = document.getElementById("contact");
const modal = bootstrap.Modal.getOrCreateInstance(contact);
const form = document.getElementById("contact-form");
const toast = bootstrap.Toast.getOrCreateInstance(
  document.getElementById("contact-toast")
);

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

  // Surrogate for actual email code - In a live website this would connect to email
  console.log("New contact request received!");
  console.log(data);

  form.reset();
  modal.hide();

  toast.show();
});

// Populate education section =====================================================================
const educationData = [
  {
    org: "Portland State University",
    logo: { file: "images/logos/psu.png", alt: "psu logo" },
    link: { url: "https://www.pdx.edu/", text: "pdx.edu" },
    location: "Portland, OR, USA",
    major: "Master's Computer Science",
    status: "In Progress",
    duration: { from: "2022", to: "Present" },
  },
  {
    org: "Portland State University",
    logo: { file: "images/logos/psu.png", alt: "psu logo" },
    link: { url: "https://www.pdx.edu/", text: "pdx.edu" },
    location: "Portland, OR, USA",
    major: "Post-Bac Computer Science",
    status: "Completed (Non-Degree)",
    duration: { from: "2020", to: "2022" },
  },
  {
    org: "Oregon Institute of Technology",
    logo: { file: "images/logos/oit.png", alt: "oit logo" },
    link: { url: "https://www.pdx.edu/", text: "pdx.edu" },
    location: "Klamath Falls, OR, USA",
    major: "Bachelor's Mechanical Engineering",
    status: "Completed",
    duration: { from: "2005", to: "2009" },
  },
];

const education = document.getElementById("education-contents");
for (let entry of educationData) {
  const div = `
  <div class="card mb-3">
    <div class="card-body">
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <image
            src="${entry.logo.file}"
            class="img-fluid object-fit-cover"
            alt="${entry.logo.alt}"
            loading="lazy"
          />
        </div>
      </div>
      <h5>
        <strong>${entry.org}</strong>
      </h5>

      <div class="small text-muted">${entry.location}</div>
      <div class="small text-muted mb-2">
        website: 
        <a href="${entry.link.url}" title="${entry.link.text}" target="_blank">${entry.link.text}</a>
      </div>
      <div><strong>${entry.major}</strong></div>
      <div class="small">Status: ${entry.status}</div>
      <div class="small">From: ${entry.duration.from} to ${entry.duration.to}</div>
    </div>
  </div>`;
  education.insertAdjacentHTML("beforeend", div);
}

// Populate accreditation section =================================================================
const accreditationData = [
  {
    cert: "Profesional Engineer, Mechanical Engineering",
    org: "Oregon State Board of Examiners for Engineering & Land Surveying",
    location: "Oregon, USA",
    logo: { file: "images/logos/osbeels.png", alt: "osbeels logo" },
    link: {
      url: "https://www.oregon.gov/osbeels/",
      text: "oregon.gov/osbeels/",
    },

    id: "82548PE",
    status: "Active",
    duration: { from: "2016", to: "Present" },
  },
];

const accreditations = document.getElementById("accreditations-contents");
for (let entry of accreditationData) {
  const div = `
  <div class="card mb-3">
    <div class="card-body">
      <div class="row">
        <div class="col-md-3 col-5">
          <image
            src="${entry.logo.file}"
            class="img-fluid object-fit-cover"
            alt="${entry.logo.alt}"
            loading="lazy"
          />
        </div>
      </div>
      <h5 class="card-title">
        <strong>${entry.org}</strong>
      </h5>

      <div class="small text-muted">${entry.location}</div>
      <div class="small text-muted mb-2">
        website: 
        <a
          href="${entry.link.url}"
          title="${entry.link.text}"
          target="_blank"
        >
          ${entry.link.text}
        </a>
      </div>
      <div><strong>${entry.cert}</strong></div>
      <div class="small">Status: ${entry.status}</div>
      <div class="small">From:   ${entry.duration.from} to ${entry.duration.to}</div>
    </div>
  </div>`;
  accreditations.insertAdjacentHTML("beforeend", div);
}

// Populate work-experience section ===============================================================
const workExperienceData = [
  {
    org: "Daimler Truck AG",
    location: "Stuttgart, Baden-Württemberg, DE",
    logo: { file: "images/logos/dtag.png", alt: "daimler truck a g logo" },
    link: {
      url: "https://www.daimlertruck.com/en",
      text: "daimlertruck.com",
    },
    title: "Software Architect",
    description:
      "In this role I have continued my DTOS with the global team, but relocated to Stuttgart Germany to better directly support the team where initial design is being defined. My current role I operate as the lead application architect defining processes and best-practices defining our set of truck applications and service-catalog reshaping our approach to internal software development and software as a product.",
    duration: { from: "2024", to: "Present" },
  },
  {
    org: "Daimler Truck North America LLC",
    location: "Portland, OR, USA",
    logo: {
      file: "images/logos/dtna.png",
      alt: "daimler truck north america logo",
    },
    link: {
      url: "https://northamerica.daimlertruck.com/",
      text: "northamerica.daimlertruck.com",
    },
    title: "Software Architect",
    description:
      "In this role I have been part of our research and development team investigating the next-generation software architecture for truck applications at Daimler Truck. Our team is working towards an SDV (Software Defined Vechile) architecture bridging together embedded microcontroller architectures with microprossessor technologies and service-oriented communication; DTOS (Daimler Truck Operating System). In this role I worked from Portland OR supporting Daimler Truck North America integrating with a global team.",
    duration: { from: "2020", to: "2022" },
  },
  {
    org: "Daimler Truck North America LLC",
    location: "Portland, OR, USA",
    logo: {
      file: "images/logos/dtna.png",
      alt: "daimler truck north america logo",
    },
    link: {
      url: "https://northamerica.daimlertruck.com/",
      text: "northamerica.daimlertruck.com",
    },
    title: "Diagnostics Gateway Engineer",
    description:
      "In this role I operated as the lead engineer for the North American diagnostic and vehicle communications gateway embedded controller (CGWce) for introduction of the CEEAce electrical architecture, including introduction of vehicle Ethernet and CAN-FD technologies to the truck architecture. I collaborated closely with global cross-functional teams to ensure seamless integration and meeting of functional and regulatory requirements driven by global needs.",
    duration: { from: "2020", to: "2022" },
  },
  {
    org: "Daimler Truck North America LLC",
    location: "Portland, OR, USA",
    logo: {
      file: "images/logos/dtna.png",
      alt: "daimler truck north america logo",
    },
    link: {
      url: "https://northamerica.daimlertruck.com/",
      text: "northamerica.daimlertruck.com",
    },
    title: "Body Controllers Engineer",
    description:
      "In this role I both supported the development of vehicle body controller software and integration, as well as lead the development of the XMC (eXtreme Modular Controller) platform—a highly flexible and scalable body controller architecture designed to support a wide range of vehicle applications. I worked closely with global, cross-functional teams to ensure that the XMC platform met the diverse needs of our customers while adhering to stringent quality and safety standards.",
    duration: { from: "2013", to: "2020" },
  },
  {
    org: "Daimler Truck North America LLC",
    location: "Portland, OR, USA",
    logo: {
      file: "images/logos/dtna.png",
      alt: "daimler truck north america logo",
    },
    link: {
      url: "https://northamerica.daimlertruck.com/",
      text: "northamerica.daimlertruck.com",
    },
    title: "Vocational Applications Engineer",
    description:
      "In this role I supported the custom development of specialty vehicle controls for use in vocational truck applications (e.g., fire trucks, cement mixers, refuse trucks). I collaborated closely with customers to understand their unique requirements and translate them into effective control system solutions.",
    duration: { from: "2011", to: "2013" },
  },
  {
    org: "Gigaphoton USA Inc.",
    location: "Beaverton, OR, USA",
    logo: { file: "images/logos/gigaphoton.jpg", alt: "gigaphoton u s a logo" },
    link: {
      url: "https://www.gigaphoton.com/",
      text: "gigaphoton.com",
    },
    title: "Field Service Engineer",
    description:
      "In this role I supported the installation, maintenance, and repair of advanced laser systems used in semiconductor manufacturing. I traveled to customer sites to perform diagnostics, troubleshoot issues, and ensure optimal performance of the equipment.",
    duration: { from: "2010", to: "2011" },
  },
];

const workExperience = document.getElementById("work-experience-contents");
for (let entry of workExperienceData) {
  const div = `
  <div class="card mb-3">
    <div class="card-body">
      <div class="row align-items-center mb-2">
        <div class="col-lg-3 col-sm-6">
          <image
            src="${entry.logo.file}"
            class="img-fluid object-fit-cover"
            alt="${entry.logo.alt}"
            loading="lazy"
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <h5 class="card-title">
            <strong>${entry.org}</strong>
          </h5>
          <div class="small text-muted">${entry.location}</div>
          <div class="small text-muted mb-2">
            website: 
            <a href="${entry.link.url}" title="${entry.link.text}" target="_blank">${entry.link.text}</a>
          </div>
          <div><strong>${entry.title}</strong></div>
          <div class="small text-muted mb-2">
            From: ${entry.duration.from} to ${entry.duration.to}
          </div>
        </div>
      </div>
      
      <p class="small">${entry.description}</p>
     </div>
  </div>`;
  workExperience.insertAdjacentHTML("beforeend", div);
}

// Populate language section ======================================================================
const languagesData = [
  {
    language: "English",
    icon: { file: "images/icons/usa.png", alt: "united states flag" },
    level: "C2",
    proficiency: "Native Speaker",
  },
  {
    language: "German",
    icon: { file: "images/icons/germany.png", alt: "german flag" },
    level: "A2-B1",
    proficiency: "Intermediate",
  },
  {
    language: "Spanish",
    icon: { file: "images/icons/spain.png", alt: "spanish flag" },
    level: "A1",
    proficiency: "Basic",
  },
];

const languages = document.getElementById("language-contents");
for (let entry of languagesData) {
  const div = `
  <div class="col-12 col-md-6 col-lg-4 mb-3">
    <div class="card">
      <div class="card-body d-flex align-items-center">
        <image
          src="${entry.icon.file}"
          class="img-fluid object-fit-cover"
          alt="${entry.icon.alt}"
          loading="lazy"
        />

        <div class="ms-3">
          <h5 class="card-title">
            <strong>${entry.language}</strong>
          </h5>
          <div class="small text-muted">Level: ${entry.level}</div>
          <div class="small text-muted">Proficiency: ${entry.proficiency}</div>
        </div>
      </div>
    </div>
  </div>`;
  languages.insertAdjacentHTML("beforeend", div);
}

// Populate software technologies section =========================================================
const technologiesData = [
  "C/C++",
  "Python",
  "JavaScript/Node.js",
  "HTML/CSS",
  "Node.js",
  "Docker",
  "Git/GitHub",
  "CANalyzer/CANoe and CAPL",
  "CAN/CAN-FD/J1939",
  "AUTOSAR",
  "UDS/DoIP",
  "MATLAB/Simulink",
  "SOME/IP",
];

const technologies = document.getElementById("software-technologies-contents");
for (let entry of technologiesData) {
  const div = `
  <div class="col-12 col-md-6 col-lg-3 my-1">
    <div class="bg-skill text-white text-center rounded p-3">
      ${entry}
    </div>
  </div>`;
  technologies.insertAdjacentHTML("beforeend", div);
}
