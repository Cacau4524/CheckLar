document.addEventListener('DOMContentLoaded', async () => {
    try {
        const resposta = await fetch('http://localhost:3000/api/servicos');
        const servicos = await resposta.json();
        
        const grid = document.getElementById('gridServicos');
        
        // Limpa o conteúdo e insere os cards dinamicamente
        grid.innerHTML = servicos.map(servico => `
            <div class="card">
                <div class="card-icon">${servico.icone || '🛠️'}</div>
                <h3>${servico.titulo}</h3>
                <p>${servico.descricao}</p>
                <span class="card-price">A partir de R$ ${servico.preco_base}</span>
                <button class="btn-card">Agendar Agora</button>
            </div>
        `).join('');

    } catch (erro) {
        document.getElementById('gridServicos').innerHTML = `
            <p style="color: red;">Não foi possível carregar os serviços. Ligue o servidor backend.</p>
        `;
    }
});

function sair() {
    window.location.href = '../index.html';
}
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  if (res.ok) {
    window.location.href = "/html/dashboard.html";
  } else {
    alert("Login inválido");
  }
}