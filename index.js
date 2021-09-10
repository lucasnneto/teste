var app = require("express")();
var cors = require("cors");
var http = require("http").Server(app);
app.use(cors());

const porta = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send(new Date());
});
app.get("/assinar/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    companyName: "Empresa Teste",
    companyTaxId: "11111111000101",
    clientName: "Nome Teste",
    term: "Autorizo a Empresa acima, a consulta dos débitos e responsabilidades decorrentes de operações de crédito que constem ou venham a constar em meu nome e de minhas empresas, no Sistema de Informações de Crédito - SCR do Banco Central, através da Nagro Crédito Agro Ltda.",
    termId: id,
    questions: [
      {
        id: "6E4od1DM9ECQp",
        question: "Qual o mês em que você nasceu?",
        answers: [
          {
            1: 1,
          },
          {
            2: 5,
          },
          {
            3: 3,
          },
          {
            4: 2,
          },
        ],
      },
    ],
  });
});
app.post("/validar/resposta", (req, res) => {
  const saida = Math.random();
  res.json({ message: saida <= 0.9 ? "Acceppt" : "Refused" });
});
app.post("/validar/signatario", (req, res) => {
  res.json({ message: "Certo" });
});
app.post("/assinar/token", (req, res) => {
  res.json({ reenviar_codigo: "???" });
});
app.post("/assinar/token/confirmar", (req, res) => {
  res.json({ message: "Certo" });
});

http.listen(porta, function () {
  console.log("Teste:" + porta);
});
