// Navegación responsive
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Carrusel de imágenes
const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const carouselDots = document.querySelectorAll(".carousel-dot");

let currentSlide = 0;
const totalSlides = carouselItems.length;

// Función para cambiar de slide
function goToSlide(index) {
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  carouselInner.style.transform = `translateX(-${index * 100}%)`;

  // Actualizar indicadores
  carouselItems.forEach((item) => item.classList.remove("active"));
  carouselDots.forEach((dot) => dot.classList.remove("active"));

  carouselItems[index].classList.add("active");
  carouselDots[index].classList.add("active");

  currentSlide = index;
}

// Event listeners para los puntos del carrusel
carouselDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
  });
});

// Cambio automático de slide cada 5 segundos
setInterval(() => {
  goToSlide(currentSlide + 1);
}, 5000);

// Efecto de neón en elementos al pasar el cursor
document
  .querySelectorAll(".social-icon, .post-card, .read-more")
  .forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.boxShadow = `0 0 20px ${this.classList.contains("read-more") ? "var(--neon-pink)" : "var(--neon-blue)"}`;
    });

    element.addEventListener("mouseleave", function () {
      this.style.boxShadow = "";
    });
  });
