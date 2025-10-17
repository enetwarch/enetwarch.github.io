import { linkDialog, addBlogPosts, insertDateElement } from "./modules/components.js";
import { addStarfieldCanvas } from "./modules/starfield.js";
import blogs from "../data/blogs.json" with { type: "json" };

window.addEventListener("DOMContentLoaded", () => {
  insertDateElement(".main h1", document.body.dataset.date);
  addBlogPosts("blog-posts-list", "blog-posts-template", blogs);

  linkDialog("hamburger-dialog", "hamburger-button");
  addStarfieldCanvas("starfield-canvas", 50);
});
