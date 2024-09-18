// Definir usuário e senha (dados simulados)
const users = {
    "anakin@skywalker.com": { password: "força", role: "admin" }  // Login específico
};

// Função de autenticação
function authenticate(username, password) {
    if (users[username] && users[username].password === password) {
        // Autenticação bem-sucedida
        return users[username].role; // Retorna o papel (role) do usuário
    }
    return null; // Falha na autenticação
}

// Evento de login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const role = authenticate(username, password);

    if (role) {
        // Armazena a autenticação no localStorage
        localStorage.setItem('userRole', role);
        localStorage.setItem('isAuthenticated', true);

        // Redireciona para o dashboard ou página inicial
        window.location.href = "dashboard.html";
    } else {
        // Mostra uma mensagem de erro se o login falhar
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = "Usuário ou senha inválidos.";
        errorMessage.style.display = 'block';
    }
});

// Função de logout
function logout() {
    // Remover os itens armazenados no localStorage
    localStorage.removeItem('userRole');
    localStorage.removeItem('isAuthenticated');
    // Redirecionar para a página de login
    window.location.href = 'login.html';
}

// Vincular o evento de logout ao botão
document.getElementById('logoutButton').addEventListener('click', function (event) {
    event.preventDefault(); // Evita qualquer comportamento padrão do link
    logout();
});

// Função para verificar se o usuário está autenticado
function checkAuthentication() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    // Se não estiver autenticado, redireciona para a página de login
    if (!isAuthenticated) {
        window.location.href = 'login.html';
    }
}

// Verificar autenticação ao carregar a página
document.addEventListener('DOMContentLoaded', checkAuthentication);