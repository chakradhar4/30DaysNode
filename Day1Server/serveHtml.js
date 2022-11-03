var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    console.log("Port Number : 3000");
    //change MIME type to text/html
    res.writeHead(200, { "Content type": "text/html" });
    //reading the content file
    fs.readFile("index.html", (err, data) => {
      //checking error
      if (err) throw err;
      console.log("Operation success");
      //sending response
      res.end(data);
    });
  })
  .listen(3000);
