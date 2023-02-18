const http = require("http");
const fs = require("fs");
const hostname = '127.0.0.1';
const port = 3000;

let htmlFile = fs.readFile("./public/index.html", function (err, data) {
  if (err) {
    throw err;
  }
  htmlFile = data;
});

let cssFile = fs.readFile("./public/styles.css", function (err, data) {
  if (err) {
    throw err;
  }
  cssFile = data;
});

let jsFile = fs.readFile("./public/main.js", function (err, data) {
  if (err) {
    throw err;
  }
  jsFile = data;
});

const server = http.createServer(function (request, response) {
  switch (request.url) {
    case "/styles.css":
      response.writeHead(200, { "Content-Type": "text/css" });
      response.write(cssFile);
      break;
    case "/main.js":
      response.writeHead(200, { "Content-Type": "application/javascript" });
      response.write(jsFile);
      break;
    default:
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(htmlFile);
  }
  response.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
