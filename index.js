const WebSocket = require('ws');
const porta = 3000;
const server = new WebSocket.Server({
  port: process.env.PORT || porta
});
let sockets = [];
server.on('connection', function (socket) {
  // Adicionamos cada nova conexão/socket ao array `sockets`
  sockets.push(socket);

  // Quando você receber uma mensagem, enviamos ela para todos os sockets
  socket.on('message', function (msg) {
    sockets.forEach((s) => s.send(msg));
  });
  // Quando a conexão de um socket é fechada/disconectada, removemos o socket do array
  socket.on('close', function () {
    sockets = sockets.filter(s => s !== socket);
  });
});