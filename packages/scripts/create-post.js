const fs = require("node:fs");
const path = require("node:path");
const readline = require("node:readline");

function createPost(templatePath) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the title for the new post: ", (title) => {
    const today = new Date().toISOString().split("T")[0];
    const filename = title.toLowerCase().replace(/\s+/g, "-");
    const template = fs.readFileSync(
      path.resolve(process.cwd(), templatePath),
      "utf8"
    );

    let newPostContent = template
      .replace("YYYY-MM-DD", today)
      .replace("Your Post Title", title);

    const filePath = path.join(process.cwd(), "posts", `${filename}.mdx`);

    fs.writeFile(filePath, newPostContent, (err) => {
      if (err) throw err;
      console.log(`New post created at ${filePath}`);
      rl.close();
    });
  });
}

module.exports = createPost;

// Execute createPost function with command-line argument
createPost(process.argv[2]);
