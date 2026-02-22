//aguarda o HTML carregar completamente antes de executar o codigo
document.addEventListener('DOMContentLoaded', function() {

    //Pegando os elementos do HTML pelo id
    const formCurso = document.getElementById("form-curso");
    const nomeCurso = document.getElementById("nome-curso");
    const nomeFaculdade = document.getElementById("nome-faculdade");
    const infoCurso = document.getElementById("info-curso");

    const formDisciplina = document.getElementById("form-disciplina");
    const nomeDisciplina = document.getElementById("nome-disciplina");
    const listaDisciplinas = document.getElementById("lista-disciplinas");

    // Carrega os dados salvos ao abrir a página

    carregarCurso();
    carregarDisciplinas();

    //evento do formulario do curso

    formCurso.addEventListener("submit", function(event) {
        event.preventDefault(); //impede o comportamento padrão do formulário

        const curso = nomeCurso.value
        const faculdade = nomeFaculdade.value

        //Salva os dados no LocalStorage
        localStorage.setItem("curso", curso);
        localStorage.setItem("faculdade", faculdade);

        mostrarCurso (curso, faculdade);

    })

    // evento do formulario da disciplina
    
    formDisciplina.addEventListener("submit", function(event) {
        event.preventDefault(); //impede o comportamento padrão do formulário

        const disciplina = nomeDisciplina.value;

        //Pega lista atual, adiciona a nova e salva novamente
        const disciplinas = getDisciplinas();
        disciplinas.push(disciplina);
        localStorage.setItem("disciplinas", JSON.stringify(disciplinas));

        adicionarItemLista(disciplina, disciplinas.length - 1); //adiciona a nova disciplina na lista
        nomeDisciplina.value = ""; //limpa o campo de input

    })

    //Mostra o curso na tela e Libera a seção de disciplinas
    function mostrarCurso(curso, faculdade) {
          infoCurso.innerHTML = `
              <p><strong>Curso:</strong> ${curso}</p>
              <p><strong>Faculdade:</strong> ${faculdade}</p>
          `;
        document.getElementById("secao-curso").classList.add("Etapa-concluida");
        secaoDisciplinas.style.display = "block";

    }

    //Adiciona um item na lista visual com botão de remover
    function adicionarItemLista(disciplina, index) {
        const item = document.creatElement("div");
        item.setAttribute("data-index", index);
        item.innerHTML = `
            <p>📚 ${disciplina}
                <button onclick="removerDisciplina(${index})">Remover</button>
            </p>
        `;
        listaDisciplinas.appendChild(item);
    }

    //Carrega o curso do LocalStorage
    function carregarCurso() {
        const curso = localStorage.getItem("curso");
        const faculdade = localStorage.getItem("faculdade");

        if (curso && faculdade) {
            nomeCurso.value = curso;
            nomeFaculdade.value = faculdade;
            mostrarCurso(curso, faaculdade);
        }
    }

    //Carrega as disciplinas do LocalStorage

    function carregarDisciplinas() {
        const disciplinas = getDisciplinas();
        disciplinas.forEach(function(disciplina, index) {
            adicionarItemLista(disciplina, index);
        })
    }

    // Retorna a lista de disciplinas do LocalStorage
    function getDisciplinas() {
        const dados = localStorage.getItem("disciplinas");
        return dados ? JSON.parse(dados) : [];
    }
    
    // Remove uma disciplina da lista
    window.removerDisciplina = function(index){
        const disciplinas = getDisciplinas();
        disciplinas.splice(index, 1); //remove a disciplina do array
        localStorage.setItem("disciplinas", JSON.stringify(disciplinas)); //atualiza o LocalStorage

        listaDisciplinas.innerHTML = ""; //limpa a lista visual
        disciplinas.forEach(function (disciplina, index) {
            adicionarItemLista(disciplina, index); //reconstrói a lista visual
        })
    }


})
    