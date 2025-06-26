class Tabela {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaAtendimentos();
    }

    criarTabelaAtendimentos() {
        const sql = `
        CREATE TABLE IF NOT EXISTS atendimentos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    data DATE,
    serviço VARCHAR(100),
    cliente VARCHAR(100),
    status ENUM('Ativo', 'Cancelado', 'Finalizado') DEFAULT 'Ativo'
);
        `;
    
    this.conexao.query(sql, (error) => {
        if (error) {
            console.log("Erro ao criar a tabela Atendimentos");
            console.log(error.message);
            return;
        }
        console.log("Tabela criada com sucesso!");
    });
    }
}

module.exports = new Tabela();