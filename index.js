const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/index");
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabelas");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

tabelas.init(conexao);

router(app, express);


app.listen(port, (error) => {
    if(error) {
        console.log("Deu erro!");
        return;
    }
    console.log("Subiu!");
}); 