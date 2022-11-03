const app = require("express")();
app.get("/", (req, res) => {
  console.log(req);
  res.send("res");
});
app.listen(8080, () => console.log("Proxy is listening on 8080"));
