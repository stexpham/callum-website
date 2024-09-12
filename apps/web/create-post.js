const fs = require("node:fs");
const path = require("node:path");
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const templatePath = path.join(__dirname, "posts", "_TEMPLATE.mdx");
const template = fs.readFileSync(templatePath, "utf8");

rl.question("Enter the title for the new post: ", (title) => {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
  const filename = title.toLowerCase().replace(/\s+/g, "-");

  let newPostContent = template.replace("YYYY-MM-DD", today);
  newPostContent = newPostContent.replace("Your Post Title", title);

  const filePath = path.join(__dirname, "posts", `${filename}.mdx`);

  fs.writeFile(filePath, newPostContent, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console -- KISS
    console.log(`New post created at ${filePath}`);
    rl.close();
  });
});
