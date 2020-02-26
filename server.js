const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

//inicia o app
const app = express();
app.use(express.json());
app.use(cors());

//inicia o bd
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true, useUnifiedTopology: true
});
//registra o model na aplicação
requireDir("./src/models");

//rotas
//app.use(reqRecebida, require(rotaEnviada))
app.use('/api', require('./src/routes'));

app.listen(3002);
