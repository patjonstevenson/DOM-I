const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// *** TASK 2 ***

// Update Nav Text
const nav = document.querySelector("nav");
const anchors = nav.querySelectorAll("a");
let i = 0;
for (let item in siteContent.nav) {
  if (i < anchors.length) {
    anchors[i].textContent = siteContent.nav[item];
    i++;
  } else {
    break;
  }
}

// Update CTA Section Content
let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

const cta = document.querySelector(".cta-text");
const ctaHeader = cta.querySelector("h1");
ctaHeader.textContent = siteContent.cta.h1;

const ctaButton = cta.querySelector("button");
ctaButton.textContent = siteContent.cta.button;

// Update Main Content Section

const textCont = document.querySelectorAll(".text-content");

// Features
textCont[0].querySelector("h4").textContent =
  siteContent["main-content"]["features-h4"];

textCont[0].querySelector("p").textContent =
  siteContent["main-content"]["features-content"];

// About
textCont[1].querySelector("h4").textContent =
  siteContent["main-content"]["about-h4"];

textCont[1].querySelector("p").textContent =
  siteContent["main-content"]["about-content"];

// Middle Image Source
const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Services
textCont[2].querySelector("h4").textContent =
  siteContent["main-content"]["services-h4"];

textCont[2].querySelector("p").textContent =
  siteContent["main-content"]["services-content"];

// Product
textCont[3].querySelector("h4").textContent =
  siteContent["main-content"]["product-h4"];

textCont[3].querySelector("p").textContent =
  siteContent["main-content"]["product-content"];

// Vision
textCont[4].querySelector("h4").textContent =
  siteContent["main-content"]["vision-h4"];

textCont[4].querySelector("p").textContent =
  siteContent["main-content"]["vision-content"];

// Contact Section

const contact = document.querySelector(".contact");
contact.querySelector("h4").textContent = siteContent.contact["contact-h4"];

const contactPs = contact.querySelectorAll("p");

contactPs[0].textContent = siteContent.contact.address;
contactPs[1].textContent = siteContent.contact.phone;
contactPs[2].textContent = siteContent.contact.email;

// *** TASK 3 ***

// Make nav text green
anchors.forEach(a => (a.style.color = "green"));

// Add items to nav
const history = document.createElement("a");
history.textContent = "History";
history.href = "#";
nav.appendChild(history);

const founder = document.createElement("a");
founder.textContent = "Founder";
founder.href = "#";
nav.prepend(founder);
