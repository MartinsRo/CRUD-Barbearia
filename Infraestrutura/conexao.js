const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: 'root',
    database: "atendimento_nodejs",
});

module.exports = conexao;