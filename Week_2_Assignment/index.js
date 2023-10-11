var http = require("http");

http
  .createServer(function (req, res) {
    console.log(req.url);
    var path = req.url.toLowerCase();
    switch (path) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to my home page!");
        break;
      case "/about":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About me: My name is Alejandro Bravo, I am 28 years old. I am an intern for Seattle Police Department. I love cars, nature, traveling, and hanging out with family &friends");
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not found. Try again:)");
        break;
    }
  })
  .listen(process.env.PORT || 3000);
