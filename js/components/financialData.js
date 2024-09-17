// Dados financeiros como saldo, entradas, saídas, contas a pagar e a receber

const financialData = {
    saldoAtual: 45000.00,
    totalEntradas: 25000.00,
    totalSaidas: 15000.00,
    contasPagar: 8000.00,
    contasReceber: 12000.00,
    margemLucro: 25.00,
    variacaoSaldo: 5.00,
    variacaoEntradas: 10.00,
    variacaoSaidas: -5.00,
    variacaoMargem: 3.00
};

// Função para gerar a tabela de dados financeiros dinamicamente
function generateFinancialTable() {
    const tableBody = document.getElementById('financialDataTable');

    const rows = [
        `<tr>
            <td>Saldo Atual</td>
            <td>R$ ${financialData.saldoAtual.toFixed(2)}</td>
            <td><span class="badge text-success">+${financialData.variacaoSaldo}% este mês</span></td>
        </tr>`,
        `<tr>
            <td>Total de Entradas</td>
            <td>R$ ${financialData.totalEntradas.toFixed(2)}</td>
            <td><span class="badge text-success">+${financialData.variacaoEntradas}% este mês</span></td>
        </tr>`,
        `<tr>
            <td>Total de Saídas</td>
            <td>R$ ${financialData.totalSaidas.toFixed(2)}</td>
            <td><span class="badge text-danger">${financialData.variacaoSaidas}% este mês</span></td>
        </tr>`,
        `<tr>
            <td>Contas a Pagar</td>
            <td>R$ ${financialData.contasPagar.toFixed(2)}</td>
            <td></td>
        </tr>`,
        `<tr>
            <td>Contas a Receber</td>
            <td>R$ ${financialData.contasReceber.toFixed(2)}</td>
            <td></td>
        </tr>`,
        `<tr>
            <td>Margem de Lucro</td>
            <td>${financialData.margemLucro}%</td>
            <td><span class="badge text-success">+${financialData.variacaoMargem}% este mês</span></td>
        </tr>`
    ];

    tableBody.innerHTML = rows.join('');
}

// Chamar a função para gerar a tabela assim que a página carregar
window.onload = generateFinancialTable;