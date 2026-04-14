export function initSidebar() {
  const links = document.querySelectorAll(".sidebar a");
  const toggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  function updateActiveLink() {
    const currentPage = location.hash.replace("#", "") || "home";

    links.forEach((link) => {
      const page = link.dataset.page;

      if (page === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("hashchange", updateActiveLink);
  updateActiveLink();

  // abrir/fechar botão
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  // fechar ao clicar em link
  links.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });
  });

  // 🔥 NOVO: clicar fora fecha
  document.addEventListener("click", (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnButton = toggle.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnButton) {
      sidebar.classList.remove("open");
    }
  });
}
