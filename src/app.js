const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/status", (req, res) => {
  res.json({
    status: "online",
    message: "Sistema de campanhas do Mercado Livre funcionando."
  });
});

app.listen(PORT, () => {
  console.log(`Servidor executando em http://localhost:${PORT}`);
});