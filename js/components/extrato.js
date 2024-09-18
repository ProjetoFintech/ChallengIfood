document.addEventListener("DOMContentLoaded", function () {
    // Simulação de dados de extrato mensal relacionados a alimentos e aquisições
    const extratoMensal = [
        { data: "01/09/2024", descricao: "Compra de Frutas para entrega", valor: "-R$ 1.200,00", status: "Concluído" },
        { data: "02/09/2024", descricao: "Venda de Prato Executivo", valor: "R$ 2.500,00", status: "Concluído" },
        { data: "05/09/2024", descricao: "Aquisição de Bebidas para o estoque", valor: "-R$ 800,00", status: "Concluído" },
        { data: "07/09/2024", descricao: "Venda de Refeição Saudável", valor: "R$ 1.800,00", status: "Concluído" },
        { data: "10/09/2024", descricao: "Compra de Carnes para preparo", valor: "-R$ 3.000,00", status: "Pendente" },
        { data: "12/09/2024", descricao: "Serviço de Entrega de Alimentos", valor: "R$ 600,00", status: "Concluído" },
        { data: "15/09/2024", descricao: "Aquisição de Vegetais para preparo", valor: "-R$ 400,00", status: "Concluído" },
        { data: "18/09/2024", descricao: "Venda de Comida Fitness", valor: "R$ 3.500,00", status: "Concluído" },
        { data: "20/09/2024", descricao: "Entrega de Sobremesas para evento", valor: "R$ 900,00", status: "Concluído" }
    ];

    // Container onde o extrato será exibido
    const extratoContainer = document.getElementById("extrato-completo");

    // Função para gerar HTML da tabela do extrato
    function gerarExtratoHTML(dadosExtrato) {
        let html = `
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
        `;

        dadosExtrato.forEach(item => {
            html += `
                <tr>
                    <td>${item.data}</td>
                    <td>${item.descricao}</td>
                    <td>${item.valor}</td>
                    <td><span class="badge ${item.status === 'Concluído' ? 'bg-success' : 'bg-warning'}">${item.status}</span></td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
        `;
        return html;
    }

    // Renderizar extrato na página
    extratoContainer.innerHTML = gerarExtratoHTML(extratoMensal);


});