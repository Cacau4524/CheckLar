async function carregarServicos() {

    const resposta = await fetch('http://localhost:3000/servicos');

    const servicos = await resposta.json();

    console.log(servicos);

}

carregarServicos();