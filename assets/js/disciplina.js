document.addEventListener(DOMContentLoaded, function () {
    
    // Pega o id da disciplina pela url
    const params = new URLSearchParams(window.location.search);
    const index = params.get("index");

    // Carrega o nome da disciplina
    const disciplinas = JSON.parse(localStorage.getItem("disciplinas")) || [];
    const nomeDisciplina = disciplinas[index];

    // Mostra o nome da disciplina como título
    if (nomeDisciplina) {
        document.getElementById("nome-disciplina").textContent = nomeDisciplina;
    document.title = `${nomeDisciplina} - Study Tracker`;
    }

    // Botão de voltar
    document.getElementById("btn-voltar").addEventListener("click", function () {
        window.location.href = "index.html";
    })
});