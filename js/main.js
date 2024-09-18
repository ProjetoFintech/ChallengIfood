const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});



// Garantir que o dark mode seja aplicado também ao botão de alternância da sidebar
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.getElementById('sidebar').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');

    // Adicionar dark mode ao botão de alternância da sidebar
    const sidebarToggleBtn = document.querySelector('.toggle-btn');
    sidebarToggleBtn.classList.toggle('dark-mode');
    
    // Aplicar dark mode em outros elementos
    const cards = document.querySelectorAll('.card');
    const tables = document.querySelectorAll('.table');
    const charts = document.querySelectorAll('.chart-container');
    const navIcons = document.querySelectorAll('.nav-icon');
    const footerLinks = document.querySelectorAll('footer a');
    const footerTexts = document.querySelectorAll('.footer ul li a');

    cards.forEach(card => card.classList.toggle('dark-mode'));
    tables.forEach(table => table.classList.toggle('dark-mode'));
    charts.forEach(chart => chart.classList.toggle('dark-mode'));
    navIcons.forEach(icon => icon.classList.toggle('dark-mode'));
    footerLinks.forEach(link => link.classList.toggle('dark-mode'));
    footerTexts.forEach(text => text.classList.toggle('dark-mode'));
});
