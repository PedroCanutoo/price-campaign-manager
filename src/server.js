const app = require("./app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor executando em http://localhost:${PORT}`);
});