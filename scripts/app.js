import { createButton } from "./components/button.js";
import { initTextGlitch } from "./effects/textGlitch.js";
import { initSobreSlider } from "./pages/sobre.js";;

async function loadSection(sectionId, filePath) {
  const container = document.getElementById(sectionId);

  if (!container) {
    console.error(`Container da seção "${sectionId}" não encontrado.`);
    return;
  }

  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`Erro ao carregar ${filePath}`);
    }

    const html = await response.text();
    container.innerHTML = html;

    if (sectionId === "sobre") {
      initSobreSlider();
    }

    if (sectionId === "gameplay") {
      initSobreSlider();
    }

    initTextGlitch();
  } catch (error) {
    container.innerHTML = "<p>Erro ao carregar seção.</p>";
    console.error(error);
  }
}

function initFixedButton() {
  const buttonContainer = document.getElementById("nextButton");

  if (buttonContainer) {
    buttonContainer.innerHTML = createButton({
      text: "Baixar",
      link: "#baixar",
    });
  }
}

async function initApp() {
  await Promise.all([
    loadSection("home", "./sections/home.html"),
    loadSection("trailer", "./sections/trailer.html"),
    loadSection("sobre", "./sections/sobre.html"),
    loadSection("gameplay", "./sections/gameplay.html"),
    loadSection("baixar", "./sections/baixar.html"),
  ]);

  initFixedButton();
}

function updateBackgroundState() {
  const current = location.hash.replace("#", "") || "home";

  if (current === "home") {
    document.body.classList.remove("dark-overlay");
  } else {
    document.body.classList.add("dark-overlay");
  }
}

window.addEventListener("hashchange", updateBackgroundState);
window.addEventListener("load", updateBackgroundState);

initApp();
