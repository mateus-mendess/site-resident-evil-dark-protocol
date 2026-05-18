export function createButton({ text, link, icon, target }) {
  return `
    <a 
      href="${link}" 
      target="${target || "_self"}"
      rel="noopener noreferrer"
      class="btn-next"
    >
      ${text}
      ${
        icon
          ? `<span class="arrow-icon">
               <ion-icon name="${icon}"></ion-icon>
             </span>`
          : ""
      }
    </a>
  `;
}
