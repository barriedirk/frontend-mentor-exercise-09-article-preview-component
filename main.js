const $ = (selector) => document.querySelector(selector);

const shareButton = $(".share-button");
const shareMenu = $(".share-menu");
const shareButtonClose = $(".share-button-close");

shareButton.addEventListener("click", (event) => {
  event.preventDefault();

  const isExpanded = shareButton.getAttribute("aria-expanded") === "true";

  shareButton.setAttribute("aria-expanded", !isExpanded);
  shareMenu.hidden = isExpanded;
});

shareButtonClose.addEventListener("click", (event) => {
  event.preventDefault();

  shareButton.setAttribute("aria-expanded", "false");
  shareMenu.hidden = true;
});

document.addEventListener("click", (event) => {
  const isClickNotInsideShareButton = !shareButton.contains(event.target);
  const isClickNotInsideShareMenu = !shareMenu.contains(event.target);

  if (isClickNotInsideShareButton && isClickNotInsideShareMenu) {
    shareButton.setAttribute("aria-expanded", "false");
    shareMenu.hidden = true;
  }
});

document.addEventListener("keydown", (event) => {
  const isEscape = event.key === "Escape";
  const isShareMenuOpen = shareMenu.hidden === false;

  if (isEscape && isShareMenuOpen) {
    shareButton.setAttribute("aria-expanded", "false");
    shareMenu.hidden = true;
  }
});
