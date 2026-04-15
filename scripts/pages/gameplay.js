export function initSobreSlider() {
  const slides = document.querySelectorAll(".sobre-page-container .slide");

  if (!slides.length) return;

  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");
  }, 4000); // troca a cada 3 segundos
}
