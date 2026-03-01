document.addEventListener("DOMContentLoaded", function () {
  // Pega o id da disciplina pela URL
  const params = new URLSearchParams(window.location.search);
  const index = params.get("index");

  // carrega o nome da disciplina
  const disciplinas = JSON.parse(localStorage.getItem("disciplinas")) || [];
  const nomeDisciplina = disciplinas[index];

  //Mostra o nome da disciplina como título
  if (nomeDisciplina) {
    document.getElementById("titulo-disciplina").textContent = nomeDisciplina;
    document.title = `${nomeDisciplina} | Study Tracker`;
  }

  // Botão de Voltar
  document.getElementById("btn-voltar").addEventListener("click", function () {
    window.location.href = "index.html";
  });

  // Carrega os elementos salvos
  carregarAssuntos();

  // Evento do formulario Assunto
  const formAssunto = document.getElementById("form-assunto");
  const nomeAssunto = document.getElementById("nome-assunto");
  const listaAssuntos = document.getElementById("lista-assuntos");

  formAssunto.addEventListener("submit", function (event) {
    event.preventDefault(); //impede o comportamento padrão do formulário

    const assunto = nomeAssunto.value;

    // Pega os assuntos dessa Disciplina e adiciona o novo
    const assuntos = getAssuntos(index);
    assuntos.push({
      nome: assunto,
      subtopicos: [],
      anotacao: "",
    });
    salvarAssuntos(assuntos);

    renderizarAssuntos(assuntos);
    nomeAssunto.value = "";
  });

  // Retorna os assuntos dessa disciplina do localStorage
  function getAssuntos() {
    const chave = "assuntos_" + index;
    const dados = localStorage.getItem(chave);
    return dados ? JSON.parse(dados) : [];
  }

  // salva assuntos no local Storage
  function salvarAssuntos(assuntos) {
    const chave = "assuntos_" + index;
    localStorage.setItem(chave, JSON.stringify(assuntos));
  }

  // Carrega os assuntos salvos na tela
  function carregarAssuntos() {
    const assuntos = getAssuntos();
    renderizarAssuntos(assuntos);
  }

  // Renderiza todos os assuntos na tela;
  function renderizarAssuntos(assuntos) {
    listaAssuntos.innerHTML = "";
    assuntos.forEach(function (assunto, i) {
      const item = document.createElement("div");
      item.classList.add("assunto-item");
      item.innerHTML = `
                <div class = "assunto-header">
                    <span class = "assunto-titulo">📖 ${assunto.nome}</span>
                    <button class = "btn-remover-assunto" onclick = "removerAssunto(${i})">Remover</button>
                </div>

                <!-- Subtopicos -->
                <div class = "subtopicos-lista" id = "subtopicos-${i}>
                    ${assunto.subtopicos
                      .map(
                        (sub, si) => `
                        <div class="subtopico-item">• ${sub}</div>
                    `,
                      )
                      .join("")}
                </div>
                <input type="text" placeholder="Adicionar subtópico" id="input-sub-${i}">
                <button onclick="adicionarSubtopico(${i})">+ Subtópico</button>

                 <!-- Anotação -->
                <textarea 
                    id="anotacao-${i}" 
                    placeholder="Anotação livre..."
                    onblur="salvarAnotacao(${i})"
                >${assunto.anotacao}</textarea>
            `;
      listaAssuntos.appendChild(item);
    });
  }

   // Remove um assunto
    window.removerAssunto = function (i) {
        const assuntos = getAssuntos()
        assuntos.splice(i, 1)
        salvarAssuntos(assuntos)
        renderizarAssuntos(assuntos)
    }

    // Adiciona um subtópico
    window.adicionarSubtopico = function (i) {
        const input = document.getElementById("input-sub-" + i)
        const texto = input.value
        if (!texto) return

        const assuntos = getAssuntos()
        assuntos[i].subtopicos.push(texto)
        salvarAssuntos(assuntos)
        renderizarAssuntos(assuntos)
    }

    // Salva a anotação quando o usuário sai do campo
    window.salvarAnotacao = function (i) {
        const textarea = document.getElementById("anotacao-" + i)
        const assuntos = getAssuntos()
        assuntos[i].anotacao = textarea.value
        salvarAssuntos(assuntos)
    }


});
