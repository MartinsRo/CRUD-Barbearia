document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-novo-atendimento');
    const tabelaBody = document.querySelector('#tabela-atendimentos tbody');

    // Função para carregar e exibir os atendimentos
    const carregarAtendimentos = async () => {
        try {
            const response = await fetch('/atendimentos');
            const atendimentos = await response.json();
            
            tabelaBody.innerHTML = ''; // Limpa a tabela antes de preencher

            atendimentos.forEach(atendimento => {
                const tr = document.createElement('tr');
                
                // Formata a data para um formato mais legível
                const dataFormatada = new Date(atendimento.data).toLocaleString('pt-BR');

                tr.innerHTML = `
                    <td>${atendimento.cliente}</td>
                    <td>${atendimento.servico}</td>
                    <td>${dataFormatada}</td>
                    <td>${atendimento.status}</td>
                    <td>
                        <button class="btn-excluir" data-id="${atendimento.id}">Excluir</button>
                    </td>
                `;
                tabelaBody.appendChild(tr);
            });
        } catch (error) {
            console.error('Erro ao carregar atendimentos:', error);
        }
    };

    // Função para adicionar um novo atendimento
    const adicionarAtendimento = async (evento) => {
        evento.preventDefault(); // Impede o recarregamento da página

        const cliente = document.getElementById('cliente').value;
        const servico = document.getElementById('servico').value;
        const data = document.getElementById('data').value;
        const status = document.getElementById('status').value;

        try {
            await fetch('/atendimentos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cliente, servico, data, status }),
            });
            form.reset(); // Limpa o formulário
            carregarAtendimentos(); // Recarrega a lista
        } catch (error) {
            console.error('Erro ao adicionar atendimento:', error);
        }
    };

    // Função para excluir um atendimento
    const excluirAtendimento = async (evento) => {
        if (evento.target.classList.contains('btn-excluir')) {
            const id = evento.target.dataset.id;
            
            if (confirm('Tem certeza que deseja excluir este atendimento?')) {
                try {
                    await fetch(`/atendimento/${id}`, {
                        method: 'DELETE',
                    });
                    carregarAtendimentos(); // Recarrega a lista
                } catch (error) {
                    console.error('Erro ao excluir atendimento:', error);
                }
            }
        }
    };

    // Adiciona os "escutadores" de eventos
    form.addEventListener('submit', adicionarAtendimento);
    tabelaBody.addEventListener('click', excluirAtendimento);

    // Carrega os atendimentos assim que a página é aberta
    carregarAtendimentos();
});