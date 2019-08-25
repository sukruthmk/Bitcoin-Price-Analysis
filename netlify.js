const fs = require("fs");

const path = "./build/_redirects";
const content = "/* /index.html 200 \n";

fs.writeFileSync(path, content, {
  encoding: "utf-8"
});
