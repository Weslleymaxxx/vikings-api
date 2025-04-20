import { fetchApi } from "./fetchApi/fetchUrlApi.js";

const inputFilme = document.getElementById('nomeDoFilme');
const botaoPesquisar = document.getElementById('botaoPesquisa');
const divImprimir = document.getElementById('filmeImpresso');

let data = null;

window.addEventListener('DOMContentLoaded', async () => {
    data = await fetchApi();
    console.log(data);

    data.Search.forEach((e, i) => {
        divImprimir.innerHTML += `
            <h3>Nome: ${e.Title}</h3>
            <p>Ano: ${e.Year}</p>
        `
    })
})

botaoPesquisar.addEventListener('click', async () => {
    const nomeFilme = inputFilme.value;
    
    // if(nameFilme === "") {
    //     return alert("Digite algum valor válido para pesquisar")
    // }

    const filmeFiltrado = data.Search.filter(filme => filme.Title === nomeFilme);
    console.log(filmeFiltrado);

    divImprimir.innerHTML = "";
    divImprimir.innerHTML += `
        <h3>${filmeFiltrado[0].Title}</h3>
        <img class="poster" src="${filmeFiltrado[0].Poster}">
    `
});