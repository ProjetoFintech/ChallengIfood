// Lógica para gráficos e saldos financeiros

// Placeholder para gráficos usando Chart.js
const ctx1 = document.getElementById('graficoDesempenho').getContext('2d');
const graficoDesempenho = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Desempenho Financeiro',
            data: [12000, 15000, 13000, 17000, 16000, 18000],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    },
});

const ctx2 = document.getElementById('graficoEntradasSaidas').getContext('2d');
const graficoEntradasSaidas = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Entradas', 'Saídas'],
        datasets: [{
            label: 'Entradas',
            data: [25000, 15000],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
});


// Dados de exemplo de produtos mais e menos vendidos
const produtosVendidosData = {
    labels: ['Pizza', 'Hambúrguer', 'Sushi', 'Salada', 'Bebida'],
    datasets: [{
        label: 'Quantidade Vendida',
        data: [500, 300, 200, 150, 100], // Exemplo de dados
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Criação do gráfico de produtos mais e menos vendidos
const ctxProdutosVendidos = document.getElementById('graficoProdutosVendidos').getContext('2d');
const graficoProdutosVendidos = new Chart(ctxProdutosVendidos, {
    type: 'bar',
    data: produtosVendidosData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});