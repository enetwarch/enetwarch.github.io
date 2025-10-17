import fs from "fs";
import path from "path";
import { marked } from "marked";

const directory = { blog: "blog", output: "src", data: "src/data" };
const template = fs.readFileSync("./tools/template.html", "utf-8");

if (!fs.existsSync(directory.blog)) {
  fs.mkdirSync(directory.output, { recursive: true });
}

const blogsData = [];
fs.readdirSync(directory.blog)
  .filter((filename) => filename.endsWith(".md"))
  .forEach((filename) => {
    const input = path.join(directory.blog, filename);
    const markdown = fs.readFileSync(input, "utf-8");
    const content = marked(markdown);

    const title = content.match(/<h1>(.*?)<\/h1>/)[1] || "Untitled";
    const date = content.match(/Date:\s*(\d{4}-\d{2}-\d{2})/);
    const description = ((max = 100) => {
      if (!content) return "No description provided";

      const paragraphs = [...content.matchAll(/<p>(.*?)<\/p>/g)];
      const descriptions = paragraphs.map((regex) => regex[1]);

      return `${descriptions.join("... ").slice(0, max)}...`;
    })();

    const href = `./${filename.replace(".md", "")}`;
    blogsData.push({ title, date, description, href });

    const html = template.replace(/{{title}}/g, `Enetwarch Blog | ${title}`).replace(/{{content}}/g, content);

    const output = filename.replace(".md", ".html");
    fs.writeFileSync(path.join(directory.output, output), html);
  });

blogsData.sort((x, y) => new Date(y.date) - new Date(x.date));
const blogsFilePath = path.join(directory.data, "blogs.json");

fs.writeFileSync(blogsFilePath, JSON.stringify(blogsData, null, 2));
console.log("All Markdown files processed.");
