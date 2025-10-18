const selectors = Object.freeze({
  techStackIcon: ".tech-stack__icon",
  techStackLabel: ".tech-stack__label",
  blogPostLink: ".blog-posts__link",
  blogPostHeader: ".blog-posts__post-header",
  blogPostDescription: ".blog-posts__post-description",
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

  for (const { href, title, description } of blogs) {
    const blog = blogPostTemplate.content.cloneNode(true);
    blog.querySelector(selectors.blogPostLink).href = href;
    blog.querySelector(selectors.blogPostHeader).innerText = title;
    blog.querySelector(selectors.blogPostDescription).innerText = description;
    blogPostList.appendChild(blog);
  }
}

export function linkDialog(dialogId, openButtonId, showClass = "dialog--show") {
  const dialog = document.getElementById(dialogId);
  const openButton = document.getElementById(openButtonId);
  const closeButton = dialog.querySelector(selectors.dialogCloseButton);
  const cancelButton = dialog.querySelector(selectors.dialogCancelButton);
  const dialogLinks = dialog.querySelectorAll(selectors.dialogLink);

  const showModal = () => {
    dialog.showModal();
    requestAnimationFrame(() => dialog.classList.add(showClass));
  };

  const closeModal = () => {
    dialog.classList.remove(showClass);
    dialog.addEventListener("transitionend", () => dialog.close(), { once: true });
  };

  openButton.addEventListener("click", showModal);
  closeButton?.addEventListener("click", closeModal);
  cancelButton?.addEventListener("click", closeModal);
  dialog.addEventListener("cancel", closeModal);
  dialog.addEventListener("click", (event) => {
    if (event.target == dialog) closeModal();
  });

  for (const dialogLink of dialogLinks) {
    dialogLink.addEventListener("click", closeModal);
  }
}

export function addFormEvent(formId, onSubmit) {
  const form = document.getElementById(formId);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    onSubmit(new FormData(form));
  });
}

export function insertDateElement(beforeElementQuery, unformattedDate) {
  const dateElement = document.createElement("p");
  dateElement.ariaLabel = "Date Published";

  const format = { year: "numeric", month: "long", day: "numeric" };
  dateElement.innerText = new Date(unformattedDate).toLocaleDateString("en-US", format);

  document.querySelector(beforeElementQuery).after(dateElement);
}
