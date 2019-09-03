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
const featuresH4 = textCont[0].querySelector("h4");
featuresH4.textContent = siteContent["main-content"]["features-h4"];
const featuresContent = textCont[0].querySelector("p");
featuresContent.textContent = siteContent["main-content"]["features-content"];

// About
const aboutH4 = textCont[1].querySelector("h4");
aboutH4.textContent = siteContent["main-content"]["about-h4"];
const aboutContent = textCont[1].querySelector("p");
aboutContent.textContent = siteContent["main-content"]["about-content"];

// Middle Image Source
const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Services
const servicesH4 = textCont[2].querySelector("h4");
servicesH4.textContent = siteContent["main-content"]["services-h4"];
const servicesContent = textCont[2].querySelector("p");
servicesContent.textContent = siteContent["main-content"]["services-content"];

// Product
const productH4 = textCont[3].querySelector("h4");
productH4.textContent = siteContent["main-content"]["product-h4"];
const productContent = textCont[3].querySelector("p");
productContent.textContent = siteContent["main-content"]["product-content"];

// Vision
const visionH4 = textCont[4].querySelector("h4");
visionH4.textContent = siteContent["main-content"]["vision-h4"];
const visionContent = textCont[4].querySelector("p");
visionContent.textContent = siteContent["main-content"]["vision-content"];

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
history.style.color = "green";
nav.appendChild(history);

const founder = document.createElement("a");
founder.textContent = "Founder";
founder.href = "#";
founder.style.color = "green";
nav.prepend(founder);

// *** Stretch ***

// Add new link element
const newFont = document.createElement("link");
newFont.href =
  "https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap";
newFont.rel = "stylesheet";

// Prepend newFont to head
const head = document.querySelector("head");
head.prepend(newFont);

// Add new font to button
ctaButton.style.fontFamily = "Source Code Pro";
ctaButton.style.width = "250px";

// Button Event
ctaButton.addEventListener(
  "click",
  event => (document.querySelector("body").style.background = "red")
);

// Add details to each .text-content div
function createDetails() {
  const details = document.createElement("details");
  details.textContent = "This is a test of a details element";
  const detailsSummary = document.createElement("summary");
  detailsSummary.textContent = "Details";
  details.prepend(detailsSummary);
  details.style.paddingTop = "2.5%";
  return details;
}
textCont.forEach(elem => elem.appendChild(createDetails()));
