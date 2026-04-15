export function createButton({ text, link, icon }) {
  return `
    <a href="${link}" class="btn-next">
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
