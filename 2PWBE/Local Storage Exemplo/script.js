function adicionarProduto() {
    let nome = document.querySelector("#produto").value;
    let quantidade = document.querySelector("#quantidade").value;

    let produto = {
        "nome": nome,
        "quantidade": quantidade
    };

    let produtos = localStorage.getItem("produtos");

    if (produtos == null) {
        produtos = [];
    } else {
        produtos = JSON.parse(produtos);
    }

    console.log(produtos)

    produtos.push(produto);

    localStorage.setItem("produtos", JSON.stringify(produtos));

    listarProdutos();
}

function listarProdutos() {
    let produtos = localStorage.getItem("produtos");

    let tbody = document.querySelector("tbody");

    tbody.innerHTML = "";

    produtos = JSON.parse(produtos);

    produtos.forEach((produto, indice) => {
        let linha = document.createElement("tr");
        let tdProduto = document.createElement("td");
        let tdQuantidade = document.createElement("td");
        let tdExcluir = document.createElement("td");

        // <td>innerHTML</td>

        tdProduto.innerHTML = produto.nome;
        tdQuantidade.innerHTML = produto.quantidade;
        tdExcluir.appendChild(removerProduto(indice));

        linha.appendChild(tdProduto);
        linha.appendChild(tdQuantidade);
        linha.appendChild(tdExcluir);
        tbody.appendChild(linha);
    });
}

function removerProduto(indice) {
    let produtos = localStorage.getItem("produtos");

    produtos = JSON.parse(produtos);

    let botaoExcluir = document.createElement("button");

    botaoExcluir.innerHTML = "Excluir";

    botaoExcluir.addEventListener("click", () => {
        produtos.splice(indice, 1);
        localStorage.setItem("produtos", JSON.stringify(produtos));
        listarProdutos();
    })

    return botaoExcluir;
}