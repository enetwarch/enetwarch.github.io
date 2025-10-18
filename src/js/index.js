import stack from "../data/stack.json" with { type: "json" };
import blogs from "../data/blogs.json" with { type: "json" };
import { addTechStack, addBlogPosts, linkDialog, addFormEvent } from "./modules/components.js";
import { addStarfieldCanvas } from "./modules/starfield.js";

window.addEventListener("DOMContentLoaded", () => {
  addTechStack("tech-stack-list", "tech-stack-template", stack);
  addBlogPosts("blog-posts-list", "blog-posts-template", blogs);
  addStarfieldCanvas("starfield-canvas", 250);

  linkDialog("hamburger-dialog", "hamburger-button");
  linkDialog("subscribe-dialog", "subscribe-button1");
  linkDialog("subscribe-dialog", "subscribe-button2");

  addFormEvent("subscribe-form", (formData) => {
    window.alert(`Email sent to ${formData.get("email")}!`);
  });
});
