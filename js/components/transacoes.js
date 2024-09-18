document.addEventListener("DOMContentLoaded", function () {
  // Simulação de dados de transações por categoria
  const transacoesPorCategoria = [
      { data: "01/09/2024", categoria: "Alimentação", valor: "R$ 1.500,00", status: "Concluído" },
      { data: "02/09/2024", categoria: "Transporte", valor: "-R$ 200,00", status: "Concluído" },
      { data: "05/09/2024", categoria: "Serviços", valor: "R$ 3.000,00", status: "Concluído" },
      { data: "10/09/2024", categoria: "Despesas Gerais", valor: "-R$ 750,00", status: "Pendente" },
      { data: "15/09/2024", categoria: "Tecnologia", valor: "R$ 4.500,00", status: "Concluído" },
      { data: "18/09/2024", categoria: "Marketing", valor: "-R$ 1.200,00", status: "Concluído" },
      { data: "20/09/2024", categoria: "Operações", valor: "R$ 5.800,00", status: "Concluído" }
  ];

  // Container onde o relatório será exibido
  const relatorioContainer = document.getElementById("relatorio-transacoes");

  // Função para gerar HTML da tabela de transações
  function gerarRelatorioHTML(dadosTransacoes) {
      let html = `
          <table class="table table-hover">
              <thead>
                  <tr>
                      <th>Data</th>
                      <th>Categoria</th>
                      <th>Valor</th>
                      <th>Status</th>
                  </tr>
              </thead>
              <tbody>
      `;

      dadosTransacoes.forEach(item => {
          html += `
              <tr>
                  <td>${item.data}</td>
                  <td>${item.categoria}</td>
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

  // Renderizar o relatório na página
  relatorioContainer.innerHTML = gerarRelatorioHTML(transacoesPorCategoria);


});