const form = document.getElementById('form');
const inputProdutos = document.getElementById('produtos');
const inputPrecos = document.getElementById('precos');
const selectCategoria = document.getElementById('categoria');
const btnEnviar = document.getElementById('btnEnviar');
const mensagemDeErro = document.getElementById('mensagemDeErro');
const cadastroDeProdutos = document.getElementById('cadastroDeProdutos');

btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    mensagemDeErro.textContent = "";

    let produto = inputProdutos.value;
    let preco = inputPrecos.value;
    let categoria = selectCategoria.value;
    

    if (produto == "" || isNaN(preco) || preco <= 0 || categoria == "") {
        mensagemDeErro.textContent = "Opa! Preencha todos os campos corretamente!";
        return;
    }

    let precoFormatado = preco.replace('.', ',');

    let item = document.createElement('p');
    item.textContent = `Produto: ${produto} - R$ ${precoFormatado} - Categoria: ${categoria}`;

    if (categoria === "Tecnologia") {
        item.classList.add('tecnologia');
    } else if (categoria === "Alimentos") {
        item.classList.add('alimentos');
    }

    cadastroDeProdutos.appendChild(item);
    form.reset();
});
