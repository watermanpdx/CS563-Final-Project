// scripts.js

// Hide/Show sections based on navbar clicks ======================================================
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

// Populate About photo-gallery ===================================================================
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
  const div = `
  <div class="col-12 col-md-6 col-lg-4">
    <div class="ratio ratio-1x1">
      <img src="images/gallery/${photo}" class="img-fluid object-fit-cover rounded" />
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
    logo: "images/psu.png",
    link: { url: "https://www.pdx.edu/", text: "pdx.edu" },
    location: "Portland, OR, USA",
    major: "Master's Computer Science",
    status: "In Progress",
    duration: { from: "2022", to: "Present" },
  },
  {
    org: "Portland State University",
    logo: "images/psu.png",
    link: { url: "https://www.pdx.edu/", text: "pdx.edu" },
    location: "Portland, OR, USA",
    major: "Post-Bac Computer Science",
    status: "Completed (Non-Degree)",
    duration: { from: "2020", to: "2022" },
  },
  {
    org: "Oregon Institute of Technology",
    logo: "images/oit.png",
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
  <div class="card my-3">
    <div class="card-body">
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <image
            src="${entry.logo}"
            class="img-fluid object-fit-cover"
          />
        </div>
      </div>
      <h5>
        <strong>${entry.org}</strong>
      </h5>

      <div class="small text-muted">${entry.location}</div>
      <div class="small text-muted mb-2">
        website: 
        <a href="${entry.link.url}" target="_blank">${entry.link.text}</a>
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
    logo: "images/osbeels.png",
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
  <div class="card my-3">
    <div class="card-body">
      <div class="row">
        <div class="col-3">
          <image
            src="${entry.logo}"
            class="img-fluid object-fit-cover"
          />
        </div>
      </div>
      <h5 class="card-title">
        <strong>${entry.org}</strong>
      </h5>

      <div class="small text-muted">${entry.location}</div>
      <div class="small text-muted mb-2">
        website: 
        <a href="${entry.link.url}" target="_blank">${entry.link.text}</a>
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
    logo: "images/dtag.png",
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
    logo: "images/dtna.png",
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
    logo: "images/dtna.png",
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
    logo: "images/dtna.png",
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
    logo: "images/dtna.png",
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
    logo: "images/gigaphoton.jpg",
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
  <div class="card my-3">
    <div class="card-body">
      <div class="row align-items-center mb-2">
        <div class="col-lg-3 col-sm-6">
          <image
            src="${entry.logo}"
            class="img-fluid object-fit-cover"
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <h5 class="card-title">
            <strong>${entry.org}</strong>
          </h5>
          <div class="small text-muted">${entry.location}</div>
          <div class="small text-muted mb-2">
            website: 
            <a href="${entry.link.url}" target="_blank">${entry.link.text}</a>
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
    icon: "images/icons/usa.png",
    level: "C2",
    proficiency: "Native Speaker",
  },
  {
    language: "German",
    icon: "images/icons/germany.png",
    level: "A2-B1",
    proficiency: "Intermediate",
  },
  {
    language: "Spanish",
    icon: "images/icons/spain.png",
    level: "A1",
    proficiency: "Basic",
  },
];

const languages = document.getElementById("language-contents");
for (let entry of languagesData) {
  const div = `
  <div class="col-12 col-md-6 col-lg-4 my-3">
    <div class="card">
      <div class="card-body d-flex align-items-center">
        <image
          src="${entry.icon}"
          class="img-fluid object-fit-cover"
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
    <div class="bg-primary text-white text-center rounded p-3">
      ${entry}
    </div>
  </div>`;
  technologies.insertAdjacentHTML("beforeend", div);
}
