var app = require("express")();
var http = require("http").Server(app);
const porta = process.env.PORT || 3000;
const server = new WebSocket.Server({ server: http });
app.get("/", (req, res) => {
  res.send(new Date());
});

http.listen(porta, function () {
  console.log("Teste:" + porta);
});
