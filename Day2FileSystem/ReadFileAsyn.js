//reading file asynchronously using node js

var fs = require("fs");

fs.readFile("message.txt", (err, data) => {
  if (err) throw err;
  console.log("content : " + data);
});
