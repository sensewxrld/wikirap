function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    if (!campoPesquisa){
        section.innerHTML = "<p>Nenhum Resultado Encontrado. Você precisa digitar algo.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase().trim();

let resultados = ""; // Inicializa uma string vazia para concatenar os resultados da pesquisa
let titulo = "";
let descricao = "";

for (let dado of dados) { // Itera sobre cada elemento (dado) do array "dados"
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    if (titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
    resultados += `
    <div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba Mais</a>
    </div>
`;
    }
}

    if(!resultados){
        resultados = "<p>Nenhum Resultado Encontrado.</p>"
    }

section.innerHTML = resultados // Atribui o conteúdo HTML gerado ao elemento "section"
}
