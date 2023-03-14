// console.log("hello mr");

// http module

const http = require("http");

const fs = require("fs");
const path = require("path");

const app = http.createServer((req, res) => {
  // console.log(req.url);
  // for plain text use plain for html
  res.writeHead(200, { "Content-Type": "text/html" });

  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) {
  //         throw err;
  //       }
  //       res.end(content);
  //     }
  //   );
  // } else if (req.url === "/about") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "about.html"),
  //     (err, content) => {
  //       if (err) {
  //         throw err;
  //       }
  //       res.end(content);
  //     }
  //   );
  // }

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url + ".html"
  );

  fs.readFile(filePath, (err, content) => {
    //   if (err) {
    //     res.writeHead(500);
    //     res.end("Error!!!");
    //   }
    // if (err) {
    // }
    if (err) {
      fs.readFile(
        path.join(__dirname, "public", "error.html"),
        (err, content) => {
          if (err) {
            // internal server error
            res.writeHead(500);
            res.end("Error!!!");
          } else {
            // page not found
            res.writeHead(404, {
              "Content-Type": "text/html",
            });
            res.end(content);
          }
        }
      );
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(content);
    }
  });

  // res.end("<h1>hello</h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:3000`);
});
