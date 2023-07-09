/* TOGGLE ICON NAVBAR*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

/* scroll SECTIONS ACTIVE LINK*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*STICKY NAVBAR */

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*remove  toggle icon y navbar when click link*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*SCROLL REVEAL */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1500,
  delay: 100,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*TYPED.JS */
const typed = new Typed(".multiple-text", {
  strings: [
    "Desarrollador Web",
    "Desarrollador Frontend",
    "Desarrollador Backend",
  ],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 800,
  loop: true,
});

/*EMAIL SEND */
(function () {
  emailjs.init("JbZBpeNeFPokRezj1");
})();
let formulario = document.querySelector("#form-contact");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let templateParams = {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value,
    asunto: document.getElementById("asunto").value,
    mensaje: document.getElementById("mensaje").value,
  };

  emailjs.send("service_eg1krlt", "template_vaycz2e", templateParams).then(
    function (response) {
      //console.log(templateParams);
      //console.log("SUCCESS!", response.status, response.text);
      Swal.fire(
        "Gracias",
        "Su mensaje ha sido enviado correctamente",
        "success"
      );
      document.getElementById("nombre").value = "";
      document.getElementById("email").value = "";
      document.getElementById("telefono").value = "";
      document.getElementById("asunto").value = "";
      document.getElementById("mensaje").value = "";
    },
    function (error) {
      console.error("FAILED...", error);
    }
  );
});
