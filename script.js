//  toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
// scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header navbar a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header navbar a[href*=" + id + "]").classList.add("active");
      });
    }
  });
  // sticky navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
  // remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
// scroll reval
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".profil-image, .service-container, .portofolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .profil-image ", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content ", { origin: "left" });
// Setup and start animation!
const typed = new typed("multiple-text", {
  String: ["Front End Developer", "And Back End PHP", "UI/UX DESIGN"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 500,
  loop: true,
});
