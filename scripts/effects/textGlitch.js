export function initTextGlitch() {
  const elements = document.querySelectorAll(".glitch-text");

  elements.forEach((el) => {
    const originalText = el.textContent;

    function glitch() {
      let newText = "";

      for (let i = 0; i < originalText.length; i++) {
        const char = originalText[i];

        // mantém espaços
        if (char === " ") {
          newText += " ";
          continue;
        }

        // chance de glitch
        if (Math.random() < 0.10) {
          newText += char.toLowerCase();
        } else {
          newText += char.toUpperCase();
        }
      }

      el.textContent = newText;

      // volta ao normal depois
      setTimeout(() => {
        el.textContent = originalText;
      }, 120);
    }

    // loop contínuo
    setInterval(() => {
      glitch();
    }, 900); // intervalo entre glitches
  });
}
