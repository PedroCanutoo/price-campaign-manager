const app = require("./app");
const config = require("./config/app.config");

app.listen(config.port, () => {
  console.log(`Servidor executando em http://localhost:${config.port}`);
});