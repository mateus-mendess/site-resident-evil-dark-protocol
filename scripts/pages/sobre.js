export function initSobreSlider() {
  const sliders = document.querySelectorAll(".slider-container");

  if (!sliders.length) return;

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");

    if (slides.length <= 1) return;

    let current = 0;

    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 5000);
  });
}
