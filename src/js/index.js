import stack from "../data/stack.json" with { type: "json" };

window.addEventListener("DOMContentLoaded", () => {
  const techStackList = document.getElementById("tech-stack-list");
  const techStackTemplate = document.getElementById("tech-stack-template");

  for (const { iconClassList, label } of stack) {
    const tech = techStackTemplate.content.cloneNode(true);
    tech.querySelector(".tech-stack__icon").classList.add(...iconClassList);
    tech.querySelector(".tech-stack__label").innerText = label;
    techStackList.appendChild(tech);
  }

  const blogPostList = document.getElementById("blog-posts-list");
  const blogPostTemplate = document.getElementById("blog-posts-template");

  for (let _ = 0; _ < 9; _++) {
    blogPostList.appendChild(blogPostTemplate.content.cloneNode(true));
  }
});
