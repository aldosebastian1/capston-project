document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navUl = document.querySelector("nav ul");

mobileMenuToggle.addEventListener("click", () => {
  navUl.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navUl.classList.remove("active");
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(0, 0, 0, 0.9)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.1)";
  }
});

document.querySelectorAll(".skill").forEach((skill, index) => {
  skill.style.animationDelay = `${index * 0.1}s`;
  skill.addEventListener("mouseenter", () => {
    skill.style.transform = "translateY(-5px) rotateY(10deg)";
  });
  skill.addEventListener("mouseleave", () => {
    skill.style.transform = "translateY(0) rotateY(0)";
  });
});
