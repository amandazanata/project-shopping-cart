import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const sectionProduct = document.querySelector('.products');
const sectionContainer = document.querySelector('.container');

// <-----Cria elemento e adiciona a classe loading + texto com aviso de carregando...----->
function aguardaCarregar() {
  const criaDiv = document.createElement('div');
  criaDiv.className = 'loading';

  const criaLabel = document.createElement('label');
  criaLabel.innerText = 'carregando...';

  document.body.appendChild(criaDiv);
  criaDiv.appendChild(criaLabel);
}

// <-----Remove elemento com a classe loading----->
function removeCarregado() {
  const loadings = document.querySelectorAll('.loading');
  if (loadings.length) {
    loadings[0].remove();
  }
}

// <-----Mostra carregando... antes do carregamento completo da página----->
// <-----Dica do site GeeksForGeeks----->
document.onreadystatechange = () => {
  if (document.readyState !== 'complete') {
    return aguardaCarregar();
  }
  removeCarregado();
};

// <-----Cria lista de produtos pesquisado ('computador') na página carregada----->
const listaDeProdutos = await fetchProductsList('computador');
listaDeProdutos.forEach((product) => sectionProduct
  .appendChild(createProductElement(product)));

document.querySelector('.cep-button').addEventListener('click', searchCep);
