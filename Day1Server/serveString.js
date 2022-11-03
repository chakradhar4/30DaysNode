var http = require("http");

var host = "127.0.0.1";
var port = 3000;

var server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  //we can send as many responses as we want using response.write() method.
  response.write("Hello world");
  response.end();
});
server.listen(port, host, (error) => {
  if (error) {
    return console.log("Error occured :", error);
  }
  console.log("server is listening on " + host + ":" + port);
});
