const selectors = Object.freeze({
  dialogCloseButton: ".dialog__close-button",
  dialogCancelButton: ".dialog__cancel-button",
  dialogLink: ".dialog__link",
});

window.addEventListener("DOMContentLoaded", () => {
  linkDialog("hamburger-dialog", "hamburger-button");
});

function linkDialog(dialogId, openButtonId) {
  const dialog = document.getElementById(dialogId);
  const openButton = document.getElementById(openButtonId);
  const closeButton = dialog.querySelector(selectors.dialogCloseButton);
  const cancelButton = dialog.querySelector(selectors.dialogCancelButton);
  const dialogLinks = dialog.querySelectorAll(selectors.dialogLink);

  openButton.addEventListener("click", () => dialog.showModal());
  closeButton?.addEventListener("click", () => dialog.close());
  cancelButton?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("cancel", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target == dialog) dialog.close();
  });

  for (const dialogLink of dialogLinks) {
    dialogLink.addEventListener("click", () => dialog.close());
  }
}
