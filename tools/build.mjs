import fs from "fs";
import path from "path";
import { marked } from "marked";

const directory = { blog: "blog", output: "src", data: path.join("src", "data") };
const template = fs.readFileSync(path.join("tools", "template.html"), "utf-8");

if (!fs.existsSync(directory.blog)) {
  fs.mkdirSync(directory.output, { recursive: true });
}

const blogsData = [];
fs.readdirSync(directory.blog).forEach((blob) => {
    const date = blob;

    fs.readdirSync(path.join(directory.blog, blob)).forEach((filename) => {
      const input = path.join(directory.blog, date, filename);
      const output = filename.replace(".md", ".html");

      const markdown = fs.readFileSync(input, "utf-8");
      const content = marked(markdown);

      const title = content.match(/<h1>(.*?)<\/h1>/)[1] || "Untitled";
      const description = ((max = 100) => {
        if (!content) return "No description provided";

        const paragraphs = [...content.matchAll(/<p>(.*?)<\/p>/g)];
        const descriptions = paragraphs.map((regex) => regex[1].replace(/<[^>]+>/g, ""));

        return `${descriptions.filter((truthy) => truthy).join("... ").slice(0, max)}...`;
      })();

      const href = `./${output.replace(".html", "")}`;
      blogsData.push({ title, date, description, href });

      const innerHtml = template
        .replace(/{{title}}/g, `Enetwarch's Blog | ${title}`)
        .replace(/{{description}}/g, description)
        .replace(/{{content}}/g, content);

      fs.writeFileSync(path.join(directory.output, output), innerHtml);
    });
  });

blogsData.sort((x, y) => new Date(y.date) - new Date(x.date));
const blogsFilePath = path.join(directory.data, "blogs.json");

fs.writeFileSync(blogsFilePath, JSON.stringify(blogsData, null, 2));
console.log("All Markdown files processed.");
