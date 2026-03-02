document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search)
    const index = params.get("id")

    const disciplinas = JSON.parse(localStorage.getItem("disciplinas")) || []
    const nomeDisciplina = disciplinas[index]

    if (nomeDisciplina) {
        document.getElementById("titulo-disciplina").textContent = nomeDisciplina
        document.title = nomeDisciplina + " — Study Tracker"
    }

    document.getElementById("btn-voltar").addEventListener("click", function () {
        window.location.href = "index.html"
    })

    const formAssunto = document.getElementById("form-assunto")
    const nomeAssunto = document.getElementById("nome-assunto")
    const listaAssuntos = document.getElementById("lista-assuntos")

    carregarAssuntos()

    formAssunto.addEventListener("submit", function (event) {
        event.preventDefault()
        const assunto = nomeAssunto.value.trim()
        if (!assunto) return

        const assuntos = getAssuntos()
        assuntos.push({
            nome: assunto,
            subtopicos: [],
            anotacao: ""
        })
        salvarAssuntos(assuntos)
        renderizarAssuntos(assuntos)
        nomeAssunto.value = ""
    })

    function getAssuntos() {
        const dados = localStorage.getItem("assuntos_" + index)
        return dados ? JSON.parse(dados) : []
    }

    function salvarAssuntos(assuntos) {
        localStorage.setItem("assuntos_" + index, JSON.stringify(assuntos))
    }

    function carregarAssuntos() {
        renderizarAssuntos(getAssuntos())
    }

    function renderizarAssuntos(assuntos) {
        listaAssuntos.innerHTML = ""
        assuntos.forEach(function (assunto, i) {
            const item = document.createElement("div")
            item.classList.add("assunto-item")
            item.innerHTML = `
                <div class="assunto-header">
                    <span class="assunto-titulo">📖 ${assunto.nome}</span>
                    <button class="btn-remover-assunto" onclick="removerAssunto(${i})">Remover</button>
                </div>
                <div class="subtopicos-lista">
                    ${assunto.subtopicos.map(sub => `<div class="subtopico-item">• ${sub}</div>`).join("")}
                </div>
                <input type="text" id="input-sub-${i}" placeholder="Adicionar subtópico">
                <button onclick="adicionarSubtopico(${i})">+ Subtópico</button>
                <textarea id="anotacao-${i}" placeholder="Anotação livre..." onblur="salvarAnotacao(${i})">${assunto.anotacao}</textarea>
            `
            listaAssuntos.appendChild(item)
        })
    }

    window.removerAssunto = function (i) {
        const assuntos = getAssuntos()
        assuntos.splice(i, 1)
        salvarAssuntos(assuntos)
        renderizarAssuntos(assuntos)
    }

    window.adicionarSubtopico = function (i) {
        const input = document.getElementById("input-sub-" + i)
        const texto = input.value.trim()
        if (!texto) return
        const assuntos = getAssuntos()
        assuntos[i].subtopicos.push(texto)
        salvarAssuntos(assuntos)
        renderizarAssuntos(assuntos)
    }

    window.salvarAnotacao = function (i) {
        const textarea = document.getElementById("anotacao-" + i)
        const assuntos = getAssuntos()
        assuntos[i].anotacao = textarea.value
        salvarAssuntos(assuntos)
    }

})