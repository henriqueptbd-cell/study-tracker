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

    //evento do formulario do curso

    formCurso.addEventListener("submit", function(event) {
        event.preventDefault(); //impede o comportamento padrão do formulário

        const curso = nomeCurso.value
        const faculdade = nomeFaculdade.value

        infoCurso.innerHTML = `
            <p><strong>Curso:</strong> ${curso}</p>
            <p><strong>Faculdade:</strong> ${faculdade}</p>
        `;
    })

    // evento do formulario da disciplina

    formDisciplina.addEventListener("submit", function(event) {
        event.preventDefault(); //impede o comportamento padrão do formulário

        const disciplina = nomeDisciplina.value;

        const item = document.createElement("div");
        item.innerHTML = `<p>📚 ${disciplina}</p>`;
        listaDisciplinas.appendChild(item);

        nomeDisciplina.value = ""; //limpa o campo de input

    })

})