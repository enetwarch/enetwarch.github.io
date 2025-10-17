const selectors = Object.freeze({
  techStackIcon: ".tech-stack__icon",
  techStackLabel: ".tech-stack__label",
  dialogCloseButton: ".dialog__close-button",
  dialogCancelButton: ".dialog__cancel-button",
  dialogLink: ".dialog__link",
});

export function addTechStack(techStackListId, techStackTemplateId, stackData) {
  const techStackList = document.getElementById(techStackListId);
  const techStackTemplate = document.getElementById(techStackTemplateId);

  for (const { iconClassList, label } of stackData) {
    const tech = techStackTemplate.content.cloneNode(true);
    tech.querySelector(selectors.techStackIcon).classList.add(...iconClassList);
    tech.querySelector(selectors.techStackLabel).innerText = label;
    techStackList.appendChild(tech);
  }
}

export function addBlogPosts(blogPostsListId, blogPostsTemplateId, blogs) {
  const blogPostList = document.getElementById(blogPostsListId);
  const blogPostTemplate = document.getElementById(blogPostsTemplateId);

  for (let _ = 0; _ < 9; _++) {
    blogPostList.appendChild(blogPostTemplate.content.cloneNode(true));
  }
}

export function linkDialog(dialogId, openButtonId) {
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
