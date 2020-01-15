const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:gudanggaram@cluster0-35xgu.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);

//métodos HTTP: GET, POST, PUT, DELETE

//tipos de parâmetros:
// query params: request.query(filtros, ordenação, paginação)
// route params: request.params (identificar um recurso na alteração ou remoção)
// body: request.body (dados para criação ou alteração de um registro)

// mongoDB (não-relacional)
