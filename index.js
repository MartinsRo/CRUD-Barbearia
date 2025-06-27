//Esse é o arquivo principal para a inicialização do servidor.
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


// ... outros requires
const path = require('path'); // Adicione este require no topo

// app.use(express.json());

app.use(express.static(path.join(__dirname, 'public'))); // <-- ADICIONE ESTA LINHA

tabelas.init(conexao);
