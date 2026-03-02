document.addEventListener("DOMContentLoaded", function () {

    const formCurso = document.getElementById("form-curso")
    const nomeCurso = document.getElementById("nome-curso")
    const nomeFaculdade = document.getElementById("nome-faculdade")
    const infoCurso = document.getElementById("info-curso")
    const formDisciplina = document.getElementById("form-disciplina")
    const nomeDisciplina = document.getElementById("nome-disciplina")
    const listaDisciplinas = document.getElementById("lista-disciplinas")
    const secaoDisciplinas = document.getElementById("secao-disciplinas")

    carregarCurso()
    carregarDisciplinas()

    formCurso.addEventListener("submit", function (event) {
        event.preventDefault()
        const curso = nomeCurso.value
        const faculdade = nomeFaculdade.value
        localStorage.setItem("curso", curso)
        localStorage.setItem("faculdade", faculdade)
        mostrarCurso(curso, faculdade)
    })

    formDisciplina.addEventListener("submit", function (event) {
        event.preventDefault()
        const disciplina = nomeDisciplina.value.trim()
        if (!disciplina) return
        const disciplinas = getDisciplinas()
        disciplinas.push(disciplina)
        localStorage.setItem("disciplinas", JSON.stringify(disciplinas))
        renderizarDisciplinas(disciplinas)
        nomeDisciplina.value = ""
    })

    function mostrarCurso(curso, faculdade) {
        infoCurso.innerHTML = `
            <h3>${curso}</h3>
            <p>${faculdade}</p>
            <button id="btn-editar-curso">Editar</button>
        `
        document.getElementById("form-curso").style.display = "none"
        document.getElementById("secao-curso").classList.add("etapa-concluida")
        if (secaoDisciplinas) {
            secaoDisciplinas.style.display = "block"
        }
        document.getElementById("btn-editar-curso").addEventListener("click", function () {
            document.getElementById("form-curso").style.display = "block"
            infoCurso.innerHTML = ""
        })
    }

    function renderizarDisciplinas(disciplinas) {
        listaDisciplinas.innerHTML = ""
        disciplinas.forEach(function (disciplina, index) {
            const item = document.createElement("div")
            item.setAttribute("data-index", index)
            item.innerHTML = `
                <p>📚 ${disciplina}
                    <button onclick="acessarDisciplina(${index})">Acessar</button>
                    <button onclick="removerDisciplina(${index})">Remover</button>
                </p>
            `
            listaDisciplinas.appendChild(item)
        })
    }

    window.acessarDisciplina = function (index) {
        window.location.href = "disciplina.html?id=" + index
    }

    function carregarCurso() {
        const curso = localStorage.getItem("curso")
        const faculdade = localStorage.getItem("faculdade")
        if (curso && faculdade) {
            nomeCurso.value = curso
            nomeFaculdade.value = faculdade
            mostrarCurso(curso, faculdade)
        }
    }

    function carregarDisciplinas() {
        const disciplinas = getDisciplinas()
        renderizarDisciplinas(disciplinas)
    }

    function getDisciplinas() {
        const dados = localStorage.getItem("disciplinas")
        return dados ? JSON.parse(dados) : []
    }

    window.removerDisciplina = function (index) {
        const disciplinas = getDisciplinas()
        disciplinas.splice(index, 1)
        localStorage.setItem("disciplinas", JSON.stringify(disciplinas))
        renderizarDisciplinas(disciplinas)
    }

})