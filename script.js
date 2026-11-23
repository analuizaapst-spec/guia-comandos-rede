// Pega todos os blocos de código (<pre>) da página.
// querySelectorAll devolve uma lista com todos os elementos encontrados.
const blocos = document.querySelectorAll("pre");

// Repete o que está dentro das chaves para cada bloco da lista.
blocos.forEach(function (bloco) {

  // 1. Cria um botão novo (ele ainda não está na página).
  const botao = document.createElement("button");
  botao.textContent = "Copiar";
  botao.className = "botao-copiar"; // classe usada no CSS

  // 2. Define o que acontece quando alguém clica no botão.
  botao.addEventListener("click", async function () {

    // Pega só o texto do comando (o botão fica fora do <code>).
    const texto = bloco.querySelector("code").innerText;

    // try/catch: tenta copiar e, se der erro, avisa em vez de quebrar.
    try {
      await navigator.clipboard.writeText(texto);
      botao.textContent = "Copiado!";
    } catch (erro) {
      botao.textContent = "Não foi possível copiar";
    }

    // Depois de 2 segundos (2000 ms), o botão volta ao normal.
    setTimeout(function () {
      botao.textContent = "Copiar";
    }, 2000);
  });

  // 3. Coloca o botão dentro do bloco de código, na página.
  bloco.appendChild(botao);
});