export function initSidebar() {
  const links = document.querySelectorAll(".sidebar a");

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
}
