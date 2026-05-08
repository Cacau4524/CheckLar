document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('regNome').value;
    const email = document.getElementById('regEmail').value;
    const senha = document.getElementById('regSenha').value;
    const tipo = document.getElementById('regTipo').value;

    try {
        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, senha, tipo })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Sucesso! Vamos te levar para a plataforma.");
            // Após cadastrar, joga o usuário para a página inicial (ou login)
            window.location.href = '../index.html'; 
        } else {
            alert("Ops: " + data.error);
        }
    } catch (error) {
        alert("O servidor está desligado. Rode 'node server.js' no terminal do backend.");
    }
});