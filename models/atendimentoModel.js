const conexao = require("../infraestrutura/conexao");

class AtendimentoModel{
    //Função responsável por mostrar os agendamentos já criados.
    listar() {  
        const sql = "SELECT * FROM atendimentos";
        return new Promise((resolve, reject) => { 
        conexao.query(sql , {}, (error, resposta) =>{
            if (error) {
                console.log("Erro ao carregar a lista!");
                reject(error);
            }
            console.log("Listando os atendimentos: ");
            resolve(resposta);
        });
    })
    }

    //Função responsável por criar um novo agendamento.
    criar(novoAtendimento) {  
        const sql = "INSERT INTO atendimentos SET ?";
        return new Promise((resolve, reject) =>{
            conexao.query(sql, novoAtendimento, (error, resposta) =>{
            if (error) {
                console.log("Erro ao carregar a lista!");
                reject(error);
            }
                console.log("Listando atendimentos: ");
                resolve(resposta);
        });    
        })
    }

    //Função responsável por atualizar o status de um agendamentos já criados.
    atualizar(atendimentoAtualizado, id) {
        const sql = "UPDATE atendimentos SET ? WHERE id = ?";
        return new Promise((resolve, reject) =>{
            conexao.query(sql, [atendimentoAtualizado, id], (error, resposta) =>{
            if (error) {
                console.log("Erro ao carregar a lista!");
                reject(error);
            }
                console.log("Atualizando atendimentos: ");
                resolve(resposta);
        });    
        })
    }

    //Função responsável por cancelar/excluir um agendamento.
    delete(id) {
    const sql = "DELETE FROM atendimentos WHERE id = ?";
    return new Promise((resolve, reject) =>{
        conexao.query(sql, id, (error, resposta) =>{
        if (error) {
            console.log("Erro ao carregar a lista!");
            reject(error);
        }
            console.log("Atendimento excluído!");
            resolve(resposta);
    });    
    })
}
}


module.exports = new AtendimentoModel();