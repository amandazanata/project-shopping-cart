import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const sectionProduct = document.querySelector('.products');
const sectionContainer = document.querySelector('.container');

/* function aguardaCarregar() {
  const criaElemento = document.createElement('h2');
  criaElemento.innerHTML = 'carregando...';
  criaElemento.className = ('loading');
  criaElemento.style.marginLeft = '5px';
  sectionContainer.appendChild(criaElemento);
  return criaElemento;
}

function removeCarregando() {
  const pegaElemento = document.querySelector('.loading');
  pegaElemento.classList.remove('loading');
  return pegaElemento;
} */

const listaDeProdutos = await fetchProductsList('computador');
listaDeProdutos.forEach((product) => sectionProduct
  .appendChild(createProductElement(product)));

document.querySelector('.cep-button').addEventListener('click', searchCep);

/* window.onload = function carregaPagina() {
  if (listaDeProdutos === true) {
    return listaDeProdutos;
  }
  if (listaDeProdutos === false) {
    try {
      aguardaCarregar();
    } catch (e) {
      removeCarregando();
    }
  }
}; */
