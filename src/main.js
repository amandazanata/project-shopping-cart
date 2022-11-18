import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const sectionProduct = document.querySelector('.products');
const sectionContainer = document.querySelector('.container');

const listaDeProdutos = await fetchProductsList('computador');
listaDeProdutos.forEach((product) => sectionProduct
  .appendChild(createProductElement(product)));

document.querySelector('.cep-button').addEventListener('click', searchCep);
