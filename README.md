# Enetwarch's Portfolio

This repository stores my portfolio page which showcases my projects, skills, and work. Blogs will additionally be included to archive my programming and overall learning journey. A **CMS engine** will be used to convert Markdown files to HTML files for blogs to make it easier to write.

## Blog

Like mentioned earlier, the **main appeal** of this portfolio-blog site hybrid is its **blog automation system**. Various blogs are written in markdown within the [`blog/`](./blog/) directory. The blogs are written in **Markdown** and are stored in directories with the following format: `YYYY-MM-DD/`. Kebab-case convention is followed when naming the blog files (e.g. `junior-reactjs-experience.md`). Here is a rough folder structure of the [`blog/`](./blog/) directory:

```bash
enetwarch.github.io/ # repository
|--.github/ # ci/cd pipelines and github specific files
|--blog/ # blogs are stored here
|  |--2025-10-26/ # date published
|  |  |--junior-reactjs-experience.md # blog file
|  |  |--object-oriented-problems.md # another blog file
|  |--2025-10-27/... # date published
|  |--2025-10-28/... # date published
|--src/ # project source files
|--tools/ # automation tools
|--.gitignore # ignores certain file names when doing git add .
|--README.md # this documentation file
|--... # other root directory files
```

### Automation

GitHub Actions is used for the CI/CD pipelines and deployment of the website through another branch. The script `pnpm build` runs tools from the [`tools/`](./tools/) directory and effectively converts all **Markdown** blog files to **HTML** files for static site generation. The final end product will effectively be **vanilla HTML, CSS, and JS** files with the help of automation tools from `Node.js` and other libraries.
