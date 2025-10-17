import stack from "../data/stack.json" with { type: "json" };
import blogs from "../data/blogs.json" with { type: "json" };
import { addTechStack, addBlogPosts, linkDialog } from "./modules/components.js";
import { addStarfieldCanvas } from "./modules/starfield.js";

window.addEventListener("DOMContentLoaded", () => {
  addTechStack("tech-stack-list", "tech-stack-template", stack);
  addBlogPosts("blog-posts-list", "blog-posts-template", blogs);

  linkDialog("hamburger-dialog", "hamburger-button");
  linkDialog("subscribe-dialog", "subscribe-button1");
  linkDialog("subscribe-dialog", "subscribe-button2");

  addStarfieldCanvas("starfield-canvas", 250);
});
