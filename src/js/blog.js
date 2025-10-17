import { linkDialog, addBlogPosts } from "./modules/components.js";
import blogs from "../data/blogs.json" with { type: "json" };

window.addEventListener("DOMContentLoaded", () => {
  addBlogPosts("blog-posts-list", "blog-posts-template", blogs);
  linkDialog("hamburger-dialog", "hamburger-button");
});
