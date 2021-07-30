var app = require("express")();
var http = require("http").Server(app);
const WebSocket = require("ws");
const porta = process.env.PORT || 3000;
// const server = new WebSocket.Server({
//   port: porta,
// });
const server = new WebSocket.Server({ server: http });
app.get("/", (req, res) => {
  res.send(new Date());
});
let sockets = [];
server.on("connection", function (socket) {
  // Adicionamos cada nova conexão/socket ao array `sockets`
  sockets.push(socket);

  // Quando você receber uma mensagem, enviamos ela para todos os sockets
  socket.on("message", function (msg) {
    sockets.forEach((s) => s.send(msg));
  });
  // Quando a conexão de um socket é fechada/disconectada, removemos o socket do array
  socket.on("close", function () {
    sockets = sockets.filter((s) => s !== socket);
  });
});
http.listen(porta, function () {
  console.log("Teste:" + porta);
});
