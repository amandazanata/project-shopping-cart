import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const sectionProduct = document.querySelector('.products');
const sectionContainer = document.querySelector('.container');

async function aguardaCarregar() {
  const criaElemento = document.createElement('h2');
  criaElemento.innerHTML = 'carregando...';
  criaElemento.className = ('loading');
  sectionContainer.appendChild(criaElemento);
}

const listaDeProdutos = await fetchProductsList('computador');
listaDeProdutos.forEach((product) => sectionProduct
  .appendChild(createProductElement(product)));

aguardaCarregar();

document.querySelector('.cep-button').addEventListener('click', searchCep);
