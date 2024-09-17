document.addEventListener('DOMContentLoaded', function() {
    const transactions = [
      { data: '2023-09-01', descricao: 'Venda de Produtos', tipo: 'Receita', valor: 2500.00, status: 'Concluído' },
      { data: '2023-09-05', descricao: 'Compra de Materiais', tipo: 'Despesa', valor: 500.00, status: 'Concluído' },
      // Adicione mais transações conforme necessário
    ];
  
    const tableBody = document.getElementById('extrato-table');
  
    transactions.forEach(transaction => {
      const row = `<tr>
        <td>${transaction.data}</td>
        <td>${transaction.descricao}</td>
        <td>${transaction.tipo}</td>
        <td>${transaction.valor.toFixed(2)}</td>
        <td>${transaction.status}</td>
      </tr>`;
      tableBody.innerHTML += row;
    });
});