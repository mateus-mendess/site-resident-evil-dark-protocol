export function createButton({ text, link }) {
  return `
        <a href="${link}" class="btn-next">
            ${text}
            <span class="arrow-icon">
                <ion-icon name="arrow-forward-circle"></ion-icon>
            </span>
        </a>
    `;
}
