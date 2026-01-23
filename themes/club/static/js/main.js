// Navegación responsive
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// ================================
// Carrusel de imágenes
// ================================

const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const carouselDots = document.querySelectorAll(".carousel-dot");

if (!carouselInner || carouselItems.length === 0) {
  console.warn("Carrusel no inicializado: HTML no encontrado");
} else {
  let currentSlide = 0;
  const totalSlides = carouselItems.length;

  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    carouselInner.style.transform = `translateX(-${index * 100}%)`;

    carouselItems.forEach((item) => item.classList.remove("active"));
    carouselDots.forEach((dot) => dot.classList.remove("active"));

    carouselItems[index].classList.add("active");
    if (carouselDots[index]) {
      carouselDots[index].classList.add("active");
    }

    currentSlide = index;
  }

  carouselDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 5000);
}

// ================================
// Efectos hover
// ================================

document
  .querySelectorAll(".social-icon, .post-card, .read-more")
  .forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.boxShadow = `0 0 20px ${
        this.classList.contains("read-more")
          ? "var(--neon-pink)"
          : "var(--neon-blue)"
      }`;
    });

    element.addEventListener("mouseleave", function () {
      this.style.boxShadow = "";
    });
  });
