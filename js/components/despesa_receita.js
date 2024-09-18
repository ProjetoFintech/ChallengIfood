document.addEventListener("DOMContentLoaded", function () {
    // Simulação de dados de receitas e despesas
    const relatorioDespesasReceitas = [
        { data: "01/09/2024", descricao: "Venda de Produto", receita: "R$ 2.500,00", despesa: "-R$ 1.000,00" },
        { data: "05/09/2024", descricao: "Compra de Insumos", receita: "R$ 0,00", despesa: "-R$ 800,00" },
        { data: "10/09/2024", descricao: "Serviço de Entrega", receita: "R$ 600,00", despesa: "-R$ 100,00" },
        { data: "15/09/2024", descricao: "Venda de Pratos Executivos", receita: "R$ 3.500,00", despesa: "-R$ 2.000,00" },
        { data: "20/09/2024", descricao: "Compra de Equipamentos", receita: "R$ 0,00", despesa: "-R$ 2.500,00" },
        { data: "25/09/2024", descricao: "Venda de Sobremesas", receita: "R$ 900,00", despesa: "-R$ 100,00" }
    ];

    // Container onde o relatório será exibido
    const relatorioContainer = document.getElementById("relatorio-despesas-receitas");

    // Função para gerar HTML do relatório
    function gerarRelatorioHTML(dadosRelatorio) {
        let html = `
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Receita</th>
                        <th>Despesa</th>
                    </tr>
                </thead>
                <tbody>
        `;

        dadosRelatorio.forEach(item => {
            html += `
                <tr>
                    <td>${item.data}</td>
                    <td>${item.descricao}</td>
                    <td class="text-success">${item.receita}</td>
                    <td class="text-danger">${item.despesa}</td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
        `;
        return html;
    }

    // Renderizar relatório na página
    relatorioContainer.innerHTML = gerarRelatorioHTML(relatorioDespesasReceitas);

});