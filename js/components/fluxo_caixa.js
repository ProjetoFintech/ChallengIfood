document.addEventListener("DOMContentLoaded", function () {
    // Simulação de dados de fluxo de caixa
    const fluxoCaixa = [
        { data: "01/09/2024", descricao: "Venda de Refeição", entradas: "R$ 2.500,00", saidas: "R$ 1.200,00", saldo: "R$ 1.300,00" },
        { data: "02/09/2024", descricao: "Aquisição de Materiais", entradas: "R$ 0,00", saidas: "R$ 800,00", saldo: "R$ 500,00" },
        { data: "03/09/2024", descricao: "Serviço de Entrega", entradas: "R$ 1.800,00", saidas: "R$ 0,00", saldo: "R$ 2.300,00" },
        // Adicione mais dados conforme necessário
    ];

    const fluxoContainer = document.getElementById("fluxo-caixa");

    function gerarFluxoCaixaHTML(dados) {
        let html = `
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Entradas</th>
                        <th>Saídas</th>
                        <th>Saldo</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Iterar sobre os dados e criar as linhas da tabela
        dados.forEach(item => {
            html += `
                <tr>
                    <td>${item.data}</td>
                    <td>${item.descricao}</td>
                    <td class="text-success">${item.entradas}</td>
                    <td class="text-danger">${item.saidas}</td>
                    <td>${item.saldo}</td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
        `;
        return html;
    }

    // Renderizar o relatório de fluxo de caixa na página
    fluxoContainer.innerHTML = gerarFluxoCaixaHTML(fluxoCaixa);

    // Modo escuro


});