var app = require("express")();
var http = require("http").Server(app);
const porta = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send(new Date());
});

http.listen(porta, function () {
  console.log("Teste:" + porta);
});
