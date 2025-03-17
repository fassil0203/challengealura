let listaDeAmigos = []; // Armazena Nomes incluidos

function adicionarAmigo() {
  const inputAmigo = document.getElementById("Amigo");
  const nomeAmigo = inputAmigo.value.trim();

  // Verifica se O Campo esta vazio
  if (nomeAmigo === "") {
    alert("Insira um nome válido !!!.");
    return;
  }

  // Verifica se já existe o nome informado
  if (listaDeAmigos.includes(nomeAmigo)) {
    alert(`O nome '${nomeAmigo}' já consta na lista!`);
    inputAmigo.value ="";
    inputAmigo.focus();
    return;    
  }

  // Nome adicionado a Lista e atualizado
  listaDeAmigos.push(nomeAmigo);
  atualizarListaDeAmigos();

  // Limpa o campo de entrada
  inputAmigo.value = "";
  inputAmigo.focus();
}

function atualizarListaDeAmigos() {
  const listaAmigosElement = document.getElementById("listaAmigos");
  listaAmigosElement.innerHTML = ""; // Limpa a lista antes de atualizar

  listaDeAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigosElement.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaDeAmigos.length < 2) {
    alert("É necessário adicionar 2 ou mais amigos para realizar o sorteio!");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSorteado = listaDeAmigos[indiceSorteado];

  // Exibe o resultado do sorteio na tela
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `<li>O Amigo Secreto foi: ${amigoSorteado}</li>`;
}


