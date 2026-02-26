const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// auto close mobile menu on click

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});// navbar scroll effect

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const translations = {
  en: {
    hero_title: "Selma Miski – Digital Marketing Strategist in Evolution",
    hero_subtitle: "Strategy, communication and performance-driven vision",
    summary_title: "Executive Summary"
  },

  it: {
    hero_title: "Selma Miski – Digital Marketing Strategist in Evoluzione",
    hero_subtitle: "Strategia, comunicazione e visione orientata ai risultati",
    summary_title: "Executive Summary"
  },

  fr: {
    hero_title: "Selma Miski – Digital Marketing Strategist en Évolution",
    hero_subtitle: "Stratégie, communication et vision orientée résultats",
    summary_title: "Executive Summary"
  }
};
